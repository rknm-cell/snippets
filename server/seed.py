# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Word, Snippet, Frame, User
fake = Faker()
Faker.seed(0)
def make_users():
    users = []
    for _ in range(30):
        
        
            
        user = User(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(length=8)
        )
        users.append(user)
    return users

def make_words():
    words = []
    for _ in range(30):
        

        word = Word(
            name=fake.text(max_nb_chars=10),
            description=fake.text(max_nb_chars=20),
            audio_url=fake.url()
        )
        
        words.append(word)
    return words


def make_snippets():
    snippets = []
    for _ in range(20):
        while _ in snippets:
            snippet = Snippet(
                name=fake.text(max_nb_chars=20),
                description=fake.sentences(),
                word_id=randint(1, 30),
            )
            snippets.append(snippet)
    return snippets

def make_frames():
    frames = []
    for _ in range(5):
        for _ in frames:
            frame = Frame(
                name=fake.text(max_nb_chars=20),
                description=fake.setences(),
                user_id=randint(1, 20),
                snippet_id=randint(1, 20),
            )
            frames.append(frame)
    return frames

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Clearing database...")
        User.query.delete()
        Word.query.delete()
        Snippet.query.delete()
        Frame.query.delete()
        print("Seeding users...")
        users = make_users()
        db.session.add_all(users)
        db.session.commit()
        print("Seeding words...")
        words = make_words()
        db.session.add_all(words)
        db.session.commit()

        print("Seeding snippets...")
        snippets = make_snippets()
        db.session.add_all(snippets)
        db.session.commit()
        print("Seeding frames...")
        frames = make_frames()
        db.session.add_all(frames)
        db.session.commit()