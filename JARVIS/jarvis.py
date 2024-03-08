import pyttsx3
import datetime
import speech_recognition as sr
import pyaudio
import wikipedia
# from distutils.version import LooseVersion


engine=pyttsx3.init('sapi5')
voices=engine.getProperty('voices')
# print(voices[1].id)
engine.setProperty('voices',voices[0].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def wishMe():
    hour=int(datetime.datetime.now().hour)
    if hour>=4 and hour<12:
        speak("Good Morning!")
    elif hour>=12 and  hour<16:
        speak("Good Afternoon!")
    elif hour>=16 and hour<20:
        speak("Good Evening!")
    else:
        speak("Good Night!")
    
    speak("I am Jarvis ma'am. How may I help you ?")


def takeCommand():
    #It takes microphone input from the user and return a string output
    r=sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening....")
        r.pause_threshold=1
        audio= r.listen(source)

    try:
        print("Recognizing....")
        query=r.recognize_google(audio, Language='en-in')
        print(f"User said: {query}\n")

    except Exception as e:
        # print(e)
        print("Please say that again....")
        return "None"
    return query

if __name__=="__main__":
    wishMe()
    while True:
        query= takeCommand().lower()
        #Logic for executing tasks based on query
        if 'wikipedia' in query:
            speak('Searching wikipedia....')
            query= query.replace("wikipedia","")
            results= wikipedia.summary(query,sentences=2)
            speak("According to Wikipedia")
            print(results)
            speak(results)