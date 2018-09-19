from flask import Flask
from flask_bootstrap import Bootstrap
from config import config_options
<<<<<<< HEAD
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_simplemde import SimpleMDE
from flask_mail import Mail


# Instances of flask extensions
login_manager = LoginManager()
login_manager.session_protection = 'strong'
login_manager.login_view = 'auth.login'
bootstrap = Bootstrap()
db = SQLAlchemy()
simple = SimpleMDE()
mail = Mail()


def create_app(config_name):
    '''
    Function that takes configuration setting key as an argument
    
    Args:
        config_name : name of the configuration to be used
    '''

    # Initialising application
=======

bootstrap = Bootstrap()

def create_app(config_name):

>>>>>>> 5494f6e1f00461f4b68734a1820245098ac55d3c
    app = Flask(__name__)

    # Creating the app configurations
    app.config.from_object(config_options[config_name])

<<<<<<< HEAD

    # Initialising flask extensions
    bootstrap.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)
    simple.init_app(app)
    mail.init_app(app)

    # Regestering the main blueprint
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    # Regestering the auth bluprint
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/auth')

    # Setting config when using an API
    # from .requests import configure_request
    # configure_request(app)

    return app
=======
    # Initializing flask extensions
    bootstrap.init_app(app)

    # Registering the blueprint
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
>>>>>>> 5494f6e1f00461f4b68734a1820245098ac55d3c
