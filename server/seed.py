# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Word, Frame, User
fake = Faker()
Faker.seed(0)
# def make_users():
#     users = []
#     for _ in range(30):
        
        
            
#         user = User(
#             name=fake.name(),
#             email=fake.email(),
#             password=fake.password(length=8)
#         )
#         users.append(user)
#     return users

# def make_words():
#     words = []
#     for _ in range(30):
        

#         word = Word(
#             name=fake.text(max_nb_chars=10),
#             description=fake.text(max_nb_chars=20),
#             audio_url=fake.url()
#         )
        
#         words.append(word)
#     return words

# def make_snippets():
#     snippets = []
#     for _ in range(20):
#         while _ in snippets:
#             snippet = Snippet(
#                 name=fake.text(max_nb_chars=20),
#                 description=fake.sentences(),
#                 word_id=randint(1, 30),
#             )
#             snippets.append(snippet)
#     return snippets

# def make_frames():
#     frames = []
#     for _ in range(5):
#         for _ in frames:
#             frame = Frame(
#                 name=fake.text(max_nb_chars=20),
#                 description=fake.setences(),
#                 user_id=randint(1, 20),
#                 snippet_id=randint(1, 20),
#             )
#             frames.append(frame)
#     return frames

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Clearing database...")
        # User.query.delete()
        Word.query.delete()
        # WordFrame.query.delete()
        Frame.query.delete()
        # print("Seeding users...")
        # users = make_users()
        # db.session.add_all(users)
        # db.session.commit()
        # frame1 = Frame(name='Frame 1', description="Frame One")
        # frame2 = Frame(name="Frame 2", description="Frame Two")
        # frames = [frame1, frame2]
        # db.session.add_all(frames)
        # db.session.commit()
        print("Seeding words...")
        # words = make_words()
        word1 = Word(name='stinks', description='angry man yelling \'oh brother, this guy stinks!\'', audio_url='./assets/audio/oh-brother-this-guy-stinks.mp3')
        word2 = Word(name='bruh', description='bruh', audio_url='./assets/audio/bruh.mp3' )
        word3 = Word(name='shut up', description='homer simpson saying \'shut up\'', audio_url='./assets/audio/shut-up.mp3')
        word4 = Word(name='and get', description='and get', audio_url='./assets/audio/MelodyPhrases/AndGet-ProL2_29.wav')
        word5 = Word(name='angry', description='Angry', audio_url='./assets/audio/MelodyPhrases/Angry.wav')
        word6 = Word(name='babe', description='Babe', audio_url='./assets/audio/MelodyPhrases/Babe-ProL2_54.wav')
        word7 = Word(name='baby', description='Baby', audio_url='./assets/audio/MelodyPhrases/Baby-ProL2_53.wav')
        word8 = Word(name='bye', description='bye', audio_url='./assets/audio/MelodyPhrases/bye-ProL2_47.wav')
        word9 = Word(name='police', description='Call The Police.', audio_url='./assets/audio/MelodyPhrases/CallThePolice-ProL2_31.wav')
        word10 = Word(name='store?', description='Can you go to the store?', audio_url='./assets/audio/MelodyPhrases/CanYouGoToTheStore-ProL2_28.wav')
        word11 = Word(name='music?', description='Can you put on some music?', audio_url='./assets/audio/MelodyPhrases/CanYouPutOnSomeMusic-ProL2_50.wav')
        word12 = Word(name='food', description='Food', audio_url='./assets/audio/MelodyPhrases/Food-ProL2_30.wav')
        word13 = Word(name='hello', description='Hello', audio_url='./assets/audio/MelodyPhrases/Hello-ProL2_46.wav')
        word14 = Word(name='how', description='How?', audio_url='./assets/audio/MelodyPhrases/How-ProL2_37.wav')
        word15 = Word(name='recovery', description='I Am In Recovery From My Surgery.', audio_url='./assets/audio/MelodyPhrases/IAmInRecoveryFromMySurgery-ProL2_43.wav')
        word16 = Word(name='stressed', description='I Am Stressed.', audio_url='./assets/audio/MelodyPhrases/IAmStressed-ProL2_34.wav')
        word17 = Word(name='can\'t hear', description='I Can\'t Hear You.', audio_url='./assets/audio/MelodyPhrases/ICantHearYou-ProL2_17.wav')
        word18 = Word(name='had surgery', description='I Had Surgery I Can\'t Talk.', audio_url='./assets/audio/MelodyPhrases/IHadSurgeryICantTalk-ProL2_42.wav')
        word19 = Word(name='have to talk', description='I Have To Talk To You Through This App.', audio_url='./assets/audio/MelodyPhrases/IHaveToTalkToYouThroughThisApp-ProL2_44.wav')
        word20 = Word(name='love you', description='I Love You.', audio_url='./assets/audio/MelodyPhrases/ILoveYou-ProL2_45.wav')
        word21 = Word(name='I need', description='I need', audio_url='./assets/audio/MelodyPhrases/INeed-L2.wav')
        word22 = Word(name='I want', description='I want', audio_url='./assets/audio/MelodyPhrases/IWantL2.wav')
        word23 = Word(name='I\'m bored', description='I\'m bored', audio_url='./assets/audio/MelodyPhrases/ImBored-ProL2_23.wav')
        word24 = Word(name='Coffee order', description='I would like a large iced coffee with milk, no sugar.', audio_url='./assets/audio/MelodyPhrases/IWouldLikeALargeIcedCoffeeWithMilkNoSugar-ProL2_41.wav')
        word25 = Word(name='I', description='I', audio_url='./assets/audio/MelodyPhrases/I-ProL2_21.wav')
        word26 = Word(name='I\'m happy', description='I\'m happy', audio_url='./assets/audio/MelodyPhrases/ImHappy-ProL2_02.wav')
        word27 = Word(name='I\'m hungry', description='I\'m hungry.', audio_url='./assets/audio/MelodyPhrases/ImHungry-ProL2_20.wav')
        word28 = Word(name='I\'m', description='I\'m', audio_url='./assets/audio/MelodyPhrases/Im-ProL2_01.wav')
        word29 = Word(name='pain', description='in pain', audio_url='./assets/audio/MelodyPhrases/InPain-ProL2_24.wav')
        word30 = Word(name='is that', description='is that', audio_url='./assets/audio/MelodyPhrases/IsThat-ProL2_18.wav')
        word31 = Word(name='is this', description='is this', audio_url='./assets/audio/MelodyPhrases/IsThis-ProL2_19.wav')
        word32 = Word(name='it\'s an emergency', description='it\'s an emergency', audio_url='./assets/audio/MelodyPhrases/ItsAnEmergency-ProL2_32.wav')
        word33 = Word(name='movie', description='Let\'s watch a movie.', audio_url='./assets/audio/MelodyPhrases/LetsWatchAMovie-ProL2_49.wav')
        word34 = Word(name='mmmm', description='Mmmm', audio_url='./assets/audio/MelodyPhrases/Mmmm-ProL2_22.wav')
        word35 = Word(name='back hurts', description='My back hurts.', audio_url='./assets/audio/MelodyPhrases/MyBackHurts-ProL2_25.wav')
        word36 = Word(name='need', description='need', audio_url='./assets/audio/MelodyPhrases/Need-ProL2_10.wav')
        word37 = Word(name='quiet', description='Please be quiet.', audio_url='./assets/audio/MelodyPhrases/PleaseBeQuiet-ProL2_27.wav')
        word38 = Word(name='repeat', description='Repeat that.', audio_url='./assets/audio/MelodyPhrases/RepeatThat-ProL2_16.wav')
        word39 = Word(name='please', description='please', audio_url='./assets/audio/MelodyPhrases/PleaseL2.wav')
        word40 = Word(name='alone', description='Please leave me alone.', audio_url='./assets/audio/MelodyPhrases/PleaseLeaveMeAlone-ProL2_26.wav')
        word41 = Word(name='sad', description='sad', audio_url='./assets/audio/MelodyPhrases/Sad-ProL2_03.wav')
        word42 = Word(name='sick one', description='sick one', audio_url='./assets/audio/MelodyPhrases/SickOne-ProL2_48.wav')
        word43 = Word(name='slay', description='slay', audio_url='./assets/audio/MelodyPhrases/Slay-ProL2_51.wav')
        word44 = Word(name='thank you', description='thank you- neutral', audio_url='./assets/audio/MelodyPhrases/ThankYou-ProL2_13.wav')
        word45 = Word(name='thank you', description='thank you-happy', audio_url='./assets/audio/MelodyPhrases/ThankYou-ProL2_52.wav')
        word46 = Word(name='that is', description='that is', audio_url='./assets/audio/MelodyPhrases/ThatIs-ProL2_08.wav')
        word47 = Word(name='this is', description='this is', audio_url='./assets/audio/MelodyPhrases/ThisIs-ProL2_07.wav')
        word48 = Word(name='we are late', description='We are late.', audio_url='./assets/audio/MelodyPhrases/WeAreLate-ProL2_33.wav')
        word49 = Word(name='what is', description='what is', audio_url='./assets/audio/MelodyPhrases/WhatIs-ProL2_15.wav')
        word50 = Word(name='when', description='when', audio_url='./assets/audio/MelodyPhrases/When-ProL2_39.wav')
        word51 = Word(name='where is', description='where is', audio_url='./assets/audio/MelodyPhrases/WhereIs-ProL2_14.wav')
        word52 = Word(name='where', description='where', audio_url='./assets/audio/MelodyPhrases/Where-ProL2_38.wav')
        word53 = Word(name='who', description='who', audio_url='./assets/audio/MelodyPhrases/Who-ProL2_36.wav')
        word54 = Word(name='why', description='why', audio_url='./assets/audio/MelodyPhrases/Why-ProL2_35.wav')
        word55 = Word(name='test', description='testing')
        
        # words = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22, word23, word24, word25, word26, word27, word28, word29, word30, word31, word32, word33, word34, word35, word36, word37, word38, word39, word40, word41, word42, word43, word44, word45, word46, word47, word48, word49, word50, word51, word52, word53, word54]
        # words = [word1, word7, word8, word9, word10, word55 ]
        # db.session.add_all(words)
        # db.session.commit()
        
        
        # wordframe1 = WordFrame( word_id=1, frame_id=1)
        # wordframe2 = WordFrame( word_id=4, frame_id=2)
        # wordframes= [wordframe1, wordframe2]
        # db.session.add_all(wordframes)
        # print("Posting wordframes")
        # db.session.commit()
        # print("Seeding snippets...")
        # snippets = make_snippets()
        # db.session.add_all(snippets)
        # db.session.commit()
        # print("Seeding frames...")
        # frames = make_frames()
        # db.session.add_all(frames)
        # db.session.commit()