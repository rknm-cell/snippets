from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates, relationship, DeclarativeBase
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.json.compact = False

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

# db = SQLAlchemy(metadata=metadata)


# Models go here!


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    
    # frames = db.relationship('Frame', backref='user')

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    @validates('email')
    def validates_email(self, key, email):
        if '@' not in email:
            raise ValueError("Not valid email")
        return email

    def __repr__(self):
        return f'<{self.id}, {self.name}>'


wordframe = db.Table('wordframe',
    db.Column('word_id', db.Integer, db.ForeignKey('words.id'), primary_key=True),
    db.Column('frame_id', db.Integer, db.ForeignKey('frames.id'), primary_key=True)
)
class Word(db.Model, SerializerMixin):
    __tablename__ = 'words'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    audio_url = db.Column(db.String)
    clicked = db.Column(db.Integer)
    frames = db.relationship('Frame', secondary=wordframe, back_populates='words')

    # frames = db.relationship('Frame', secondary=wordframes, backref=db.backref('words', lazy='dynamic'))
    # wordframes = db.relationship('WordFrame', backref='word')
    # frames = db.relationship('Frame', back_populates=('words'))

    def __repr__(self):
        return f'<{self.id}, {self.name}>'



# class WordFrame(db.Model, SerializerMixin):
#     __tablename__ = 'wordframes'
#     id = db.Column(db.Integer, primary_key=True)

#     word_id = db.Column(db.Integer, db.ForeignKey('words.id'))
#     frame_id = db.Column(db.Integer, db.ForeignKey('frames.id'))
    # users = association_proxy('frames', 'words')

    # frames = db.relationship('Frame', backref='snippet')




class Frame(db.Model, SerializerMixin):
    __tablename__ = 'frames'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    
    words = db.relationship('Word', secondary=wordframe, back_populates='frames')

    # user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # word_frames = db.relationship('WordFrame', backref='frame')
    # word_id = db.Column(db.Integer, db.ForeignKey('words.id'))
    # wordframe_id = db.Column(db.Integer, db.ForeignKey('wordframes.id'))
    
    
    def __repr__(self):
        return f'<{self.id}, {self.name}>'

# db.create_all()
