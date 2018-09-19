from flask import render_template,request,redirect,url_for,abort,flash
from . import main
<<<<<<< HEAD
from ..models import User
from flask_login import login_required,current_user
from datetime import datetime, timezone
from .. import db
import markdown2
from ..email import mail_message

=======
>>>>>>> 5494f6e1f00461f4b68734a1820245098ac55d3c

# Views
@main.route('/')
def index():

    '''
    View root page function that returns the index page and its data
    '''
<<<<<<< HEAD
    return render_template('index.html')
=======
    title = 'test hello'
    return render_template('index.html')
>>>>>>> 5494f6e1f00461f4b68734a1820245098ac55d3c
