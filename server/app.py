#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, session, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User, Word, Frame

# Views go here!


class Words(Resource):
    def get(self):
        try:
            words = Word.query.all()
            new_words = []
            for w in words:
                new_words.append(
                    w.to_dict(only=("id", "name", "description", "audio_url", )))

            return new_words, 200
        except:
            return {"words not found"}, 404

    def post(self):
        try:
            new_word = Word(
                name=request.json['name'],
                description=request.json['description'],
                audio_url=request.json['audio_url']
            )
            db.session.add(new_word)
            db.session.commit()
            new_word_dict = new_word.to_dict(only=("id", "word_id", "frame_id", ))
            response = make_response(
                new_word_dict, 201
            )
            return response
        except:
            return {"no dice", 400}


api.add_resource(Words, '/words')



class WordsById(Resource):
    def get(self, id):
        word = Word.query.filter_by(id=id).first()
        if not word:
            return make_response({
                "error": "Word not found"
            }, 404)
        word_dict = word.to_dict(
            rules=('name', 'description', 'audio_url', ))
        response = make_response(word_dict, 200)
        return response


api.add_resource(WordsById, '/words/<int:id>')

# class WordFrames(Resource):
#     def get(self):
#         try:
#             wordframes = WordFrame.query.all()
#             new_wordframes = []
#             for w in wordframes:
#                 new_wordframes.append(
#                     w.to_dict())

#             return new_wordframes, 200
#         except:
#             return {"words not found"}, 404
#     def post(self):
#         try:
#             new_wordframe = WordFrame(
            
#                 word_id=request.json['word_id'],
#                 frame_id=request.json['frame_id']
#             )
#             db.session.add(new_wordframe)
#             db.session.commit()
#             new_word_dict = new_wordframe.to_dict()
#             response = make_response(
#                 new_word_dict, 201
#             )
#             return response
#         except:
#             return {"no dice", 400}    

# api.add_resource(WordFrames, '/wordframes')
class Login(Resource):
    def post(self):
        email = request.get_json()['email']
        password = request.get_json()['password']

        user = User.query.filter(User.email == email).first()

        if user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 200
        return {'error': '401 Unauthorized'}, 401


api.add_resource(Login, '/login')


class Signup(Resource):
    def post(self):
        name = request.get_json()['name']
        email = request.get_json()['email']
        password = request.get_json()['password']
        if name and email and password:
            new_user = User(name=name)
            new_user.email = email
            new_user.password_hash = password
            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id
            return new_user.to_dict(), 201
        return {'error': '422 Unprocessable Entity'}, 422


api.add_resource(Signup, '/signup')


class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {'message': '204: No Content'}, 204


api.add_resource(Logout, '/logout')

class WordFrames(Resource):
    def get(self):
        frames = Frame.query.all()
        frames_with_words = []

        for frame in frames:
            frame_data = {
                'id': frame.id,
                'name': frame.name,
                'words': [word.id for word in frame.words]
            }
            frames_with_words.append(frame_data)

        return frames_with_words, 200

    def post(self):
        payload = request.json
        word_ids = payload.get('word_ids', [])
        frame_ids = payload.get('frame_ids', [])

        if not word_ids or not frame_ids:
            return {'message': 'Invalid payload. Both "words" and "frame_ids" must be provided.'}, 400
        words = Word.query.filter(Word.id.in_(word_ids)).all()
        frames = Frame.query.filter(Frame.id.in_(frame_ids)).all()
        if len(words) != len(word_ids) or len(frames) != len(frame_ids):
            return {'message': 'Invalid word IDs or frame IDs provided.'}, 400

    
        for word in words:
            for frame in frames:
                frame.words.append(word)
        db.session.commit()
        return {'message': 'Words added to frames successfully.'}, 201
    
api.add_resource(WordFrames, '/wordframes')

class WordFrameDeleteResource(Resource):
    def delete(self, wordframe_id, word_id):
        wordframe = Frame.query.get(wordframe_id)

        if wordframe is None:
            return {'message': 'Wordframe not found'}, 404

        word = Word.query.get(word_id)

        if word is None:
            return {'message': 'Word not found'}, 404

        if word not in wordframe.words:
            return {'message': 'Word is not associated with the given wordframe'}, 400

        wordframe.words.remove(word)
        db.session.commit()

        return {'message': 'Word removed from wordframe successfully'}, 200

# Endpoint registration
api.add_resource(WordFrameDeleteResource, '/wordframes/<int:wordframe_id>/words/<int:word_id>')


class Frames(Resource):
    def get(self):
        try:
            frames = Frame.query.all()
            new_frames = []
            for f in frames:
                new_frames.append(
                    f.to_dict(only=("id", "name", "description", )))

            return new_frames, 200
        except:
            return {"frames not found"}, 404

    def post(self):
        try:
            new_frame = Frame(
                name=request.json['name'],
                description=request.json['description'],
                

            )
            db.session.add(new_frame)
            db.session.commit()
            new_frame_dict = new_frame.to_dict()
            response = make_response(
                new_frame_dict, 201
            )
            return response
        except:
            return {"no dice", 400}


api.add_resource(Frames, '/frames')
class FramesById(Resource):
    def get(self, id):
        try:
            frame = Frame.query.filter_by(id=id).first()
            return frame.to_dict()
        except:
            return {"error": "404: Frame not found"}, 404

    def delete(self, id):
        try:
            frame = frame.query.filter_by(id=id).first()
            db.session.delete(frame)
            db.session.commit()
            return {}, 204
        except:
            return {'error': '404: Frame not found'}, 404
    def patch(self, id):
        try: 
            frame = frame.query.filter_by(id=id).first()
            if request.json['word_id']:
                setattr(frame, 'word_id', request.json['word_id'])
            db.session.add(frame)
            db.session.commit()
            return frame.to_dict(), 205

        except:
            return {"error" : "Patch not working"}, 400

api.add_resource(FramesById, '/frames/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
