#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
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
                new_words.append(w.to_dict(only=("id", "name", "description", "audio_url")))

            return new_words, 200
        except:
            return {"words not found"}, 404

api.add_resource(Words, '/words')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
