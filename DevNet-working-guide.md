 # Rules to follow

 ###  Everytime you begin working on the project, use the following commands (in order):
	
		git pull
		npm install

Everytime.

---

### Everytime that you want to push to the github repo, do the following (in order):

		git pull --rebase -u origin [branch-name]

What this command does is it gets the latest code from the reomte repo, and integrates it with the code that you have locally.

Here, you might get conflicts. Resolve those, check that the app is working as expected. and then continue.
			
		git commit -am "Appropriate, infromative commit message"
		git push

---

### On git

Of course learn the basics of git or use the webapp if you find that easier.

---

### On branches

We may be able to start initially on the `master` branch until we have a basic setup ready, after which we may eventually start using branches for implementing various functionalities. 

---

### On SCSS

You don't need to learn anything tbh, you can just use basic CSS in the `.scss` files.