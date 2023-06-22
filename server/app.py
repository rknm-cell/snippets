#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, session, make_response 
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User, Word, Snippet, Frame

# Views go here!


class Words(Resource):
    def get(self):
        try:
            words = Word.query.all()
            new_words = []
            for w in words:
                new_words.append(
                    w.to_dict(only=("id", "name", "description", "audio_url")))

            return new_words, 200
        except:
            return {"words not found"}, 404
    def post(self):
        try:
            new_word = Word(
                name = request.json['name'],
                description = request.json['description'],
                audio_url = request.json['audio_url']
            )
            db.session.add(new_word)
            db.session.commit()
            new_word_dict = new_word.to_dict()
            response = make_response(
                new_word_dict, 201
            )
            return response
        except:
            return {"no dice", 400}


api.add_resource(Words, '/words')

# class WordsById(Resource):
# api.add_resource(WordsById, '/words/<int:id>')
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

class Frames(Resource):
    def get(self):
        try:
            frames = Frame.query.all()
            new_frames = []
            for f in frames:
                new_frames.append(
                    f.to_dict(only=("id", "name", "description", "snippet_id")))

            return new_frames, 200
        except:
            return {"frames not found"}, 404
    def post(self):
        try:
            new_frame = Frame(
                name = request.json['name'],
                description = request.json['description'],
                
                
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
if __name__ == '__main__':
    app.run(port=5555, debug=True)
