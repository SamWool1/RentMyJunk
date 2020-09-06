# RentMyJunk (Reupload)
My CSE115a (Software Engineering) project, reuploaded here for portfolio purposes. I was on a team with Nathaniel Tjandra, Anjali Dileep, Sruthi Jaganathan, and Lilian Gallon. This project was my first time working on a web application using modern frameworks, and as a result, the design is a little wonky - the backend and frontend are two separate applications, since we used React for the frontend and Flask for the backend (we had initially wanted to use Flask only, but our TA urged us to use both), and weren't able to get them to work together nicely in time for the end of the sprint. As a result, things like accounts were difficult to get working properly, but everything somehow came together in the end nicely.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## cse115a

![travis build](https://travis-ci.org/ntjandra/cse115a.svg?branch=master)

### First run

Make sure that you have [node.js](https://nodejs.org/en/) installed on your computer. Go to rentmyjunk/ and run `npm install`. It should generate node_modules directory.
Run:
- `npm install js-cookie`. This is crucial for tracking login status.
- `npm install react-bootstrap bootstrap`. This is for formatting the website
- `npm install firebase react-firebase-file-uploader`. This is for managing the users' images

### Run the website
- Make sure to fill `rentmyjunk/src/firebase-config.js` with your Firebase storage credentials.
- Go to rmj_oss/ and run once `pip install -r requirements.txt`. Then you can run `python3 server.py`.
- Go to rentmyjunk/ and run `npm start`
