import os

class Config:
<<<<<<< HEAD

    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://annstella:sterun@localhost/game'


=======
   pass
>>>>>>> 5494f6e1f00461f4b68734a1820245098ac55d3c

class ProdConfig(Config):
    pass


class DevConfig(Config):
    DEBUG = True

config_options = {
'development':DevConfig,
'production':ProdConfig
<<<<<<< HEAD
}
=======
}
>>>>>>> 5494f6e1f00461f4b68734a1820245098ac55d3c
