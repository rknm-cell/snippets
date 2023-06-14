from sqlalchemy_serializer import SerializerMixin


from config import db

# Models go here!


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    admin = db.Column(db.Boolean, default=False)


class Word(db.Model, SerializerMixin):
    __tablename__ = 'words'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)


class Snippet(db.Model, SerializerMixin):
    __tablename__ = 'snippets'
