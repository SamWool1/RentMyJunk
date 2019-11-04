import sys
#for creating the mapper code
from sqlalchemy import Column, ForeignKey, Integer, String

#for configuration and class code
from sqlalchemy.ext.declarative import declarative_base

#for creating foreign key relationship between the tables
from sqlalchemy.orm import relationship

#for auto-incrementing id
# from sqlalchemy.schema import Sequence

#for configuration
from sqlalchemy import create_engine

#create declarative_base instance
Base = declarative_base()

# RentPost, extends the Base Class.
class RentPost(Base):
   __tablename__ = 'rentpost'

   id = Column(Integer, autoincrement=True, primary_key=True)
   title = Column(String(250), nullable=False)
   description = Column(String(250), nullable=False)
   location = Column(String(250))
   contactinfo = Column(String(250))
   price = Column(String(250))

   def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'location': self.location,
            'contactinfo': self.contactinfo,
            'price': self.price,
        }

# Creates a create_engine instance at the bottom of the file
engine = create_engine('sqlite:///site.db')

Base.metadata.create_all(engine)