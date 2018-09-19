from flask import render_template,request,redirect,url_for,abort,flash
from . import main

# Views
@main.route('/')
def index():

    '''
    View root page function that returns the index page and its data
    '''
    title = 'test hello'
    return render_template('index.html')
