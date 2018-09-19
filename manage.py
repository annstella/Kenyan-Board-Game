<<<<<<< HEAD
from app import create_app,db
from flask_script import Manager,Server
# Connect to models
from app.models import User
# Set up migrations
from flask_migrate import Migrate,MigrateCommand

# Creating app instance
app = create_app('development')
# app = create_app('production')


# Create manager instance 
manager = Manager(app)
manager.add_command('server',Server)

# Create migrate instance
migrate = Migrate(app,db)
manager.add_command('db',MigrateCommand)

@manager.shell
def make_shell_context():
    return dict( app=app, db=db, User=User)


if __name__ == '__main__':
    manager.run()
=======
from app import create_app
# from app.models import
# from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager,Server


# Creating app instance
# app = create_app('production')
app = create_app('development')

manager = Manager(app)
#
# migrate = Migrate(app,db)
# manager.add_command('db',MigrateCommand)


manager.add_command('server',Server)


@manager.shell
def make_shell_context():
    return dict(app = app)

if __name__ == '__main__':
    manager.run()
>>>>>>> 5494f6e1f00461f4b68734a1820245098ac55d3c
