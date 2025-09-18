### Contributing as a member
There are many ways to contribute!
Provide suggestions and ideas for events you'd like to see (or host!), add to our resource list, or join the leadership team! Contact Sonal or Hannah for more information.

Another way to contribute is by improving and adding to our organizational website. We also encourage learning and regularly using GitHub for managing and backing up projects, and practicing hands-on by contributing to the organization is an incredible way to learn. Keep reading on to learn how to submit pull requests.

### Submitting a Pull Request
A Pull Request or PR is essentially what you submit as a contributor for the maintainer or owner to review and incorporate into the final, deployed version of the website hosted online. 

The website is typically deployed from the **main** branch, and you can work on your changes in a forked branch off the main, which can later be merged with main. Different people can simultaneously keep working on their branches, and once you're done, just push the branch to GitHub. Follow the steps below to learn how to do this!

1. To begin, ensure you have Git installed on your local system and have a GitHub account associated with the [organization](https://github.com/Tufts-Computational-Biology-Club). If you don't have it yet, you can download it from [here]().

2. You'll need to set up an SSH key to be able to **clone** or copy repositories locally to work on them. To do this, open a terminal on your system and generate an SSH key by typing in the following:
`ssh-keygen -t ed25519 -C "youremail@email.com"`

Replace the final part with the email associated with your GitHub account. It will ask you to selecvt the location to save the key, or a password/passphrase to associate with the key, but you don't need to do either of those things. Just press ENTER to bypass these requirements. 
You know it has worked successfully when it generates a randomart image for your key. The output will also include the path to where the key was saved, and you can get the key by running the following command:
`cat /path/.ssh/id_ed25519.pub`

Remember to replace the 'path' and file name with what you're shown on your end. Copy the SSH key shown by running the above command.

3. Now, go back to GitHub, and go to Settings > SSH and GPG Keys. At the top right, click on 'New SSH key'. Give it a name using the Title (you can name it your work/home computer, for instance), select 'Authentication Key' as the key type, and paste the SSH key you generated and copied in step 2. Once done, click the 'Add SSH key' button.

4. Copy the repository locally by heading to the [website repo](https://github.com/Tufts-Computational-Biology-Club/website), and click the green '<> Code' dropdown button. On the local tab, under Clone, click SSH and copy the link shown. Now navigate to the location you'd like to work in locally, and clone the repo:
`git clone SSH_link`

5. A directory should be created called `website`. You can make changes inside of this directory, but remember to work on a branch! To begin, start with `cd website` to go inside this folder. Most documents to be changed live inside the `content` folder.

6. You can use `git status` to check on branch location. It should say:

```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

7. Create a new branch with `git branch branch_name`. Name this branch anything you like, but try to make sure it sounds vaguely related to what you're trying to do for clarity's sake.

8. To start working on the branch you just created, move to it by saying `git checkout branch_name`. Ensure your location has changed by using `git status` again.

9. Make the edits you would like to introduce. Save any files necessary, and then when you check `git status`, any modifications will be highlighted. To stage them for committing, use `git add file_name`, where you mention the modified files in place of `file_name`. If you check again with `git status`, you'll notice that these changes have now been staged for committing.

10. You can commit your changes using the following command:
`git commit -m "fixed xyz"`
The `-m` flag indicates the commit message, and it is good practice to write brief yet informative messages with each commit.

11. Your changes are now committed! You can push them to the GitHub by us8ing `git push origin branch_name`, and if all works well, you should be able to see your branch on the repo under the branches tab in the Code section.

12. You now have to create a **pull request** or PR for us to review before it can be merged to main. To do this, you can create a pull request by clicking on your branch. Provide a brief description of the change you made, and request review from either Sonal, Hannah, or Jaycee on the top right and clicking on Reviewers. 
You **cannot** merge a PR without reviewer approval! 

And that's all! Once your PR is reviewed, approved, and merged, voila! You're now a contributor!

