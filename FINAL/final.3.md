FINAL: QUESTION 3

This is a Hands On problem. In this problem, the database will begin in an initial state, you will manipulate it, and we will verify that the database is in the correct final state when you click 'submit'. If you need to start over at any point, you can click 'reset' to re-initialize the database, but this will not change your answer if you have already clicked 'submit'. If you wish to change your answer, get the database into the correct state, and then click 'submit'. If you leave the question and come back, the database will re-initialize. If you have clicked the 'submit' button at least once, you will see the word "Submitted" below the shell.

In this problem you will update a document in the messages collection to illustrate your mastery of updating documents from the shell. In fact, we've created a collection with a very similar schema to the Enron dataset, but filled instead with randomly generated data.

Please add the email address "mrpotatohead@10gen.com" to the list of addresses in the "headers.To" array for the document with "headers.Message-ID" of "<8147308.1075851042335.JavaMail.evans@thyme>"

This is a fully functional web shell, so please press enter for your query to get passed to the server, just like you would for the command line shell.

Note: The web shell is currently using MongoDB version 2.4, so it will not acknowledge a properly performed update. Upgrading the shell is on our to-do list, but for now, we recommend checking with a find() query to verify that your update worked properly before submitting.
````
> db.message.find({"headers.Message-ID": "<8147308.1075851042335.JavaMail.evans@thyme>"},{"headers.To":1}).pretty()
> db.message.update({"headers.Message-ID": "<8147308.1075851042335.JavaMail.evans@thyme>"},{$addToSet:{"headers.To":"mrpotatohead@10gen.com"}})
