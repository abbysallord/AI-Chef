# Chef Claude

This bot generates recipe based on user input. Runs using hugging face's Mistral AI API key. For security reasons, I have not included the API key in the repo.

# How to use

Clone this repo to your local machine. Go to ai.js file in the scr folder and add your huggingface API key to the HF_TOKEN constant and run the program using "npm run dev" command. Enjoy.

# LinkedIn and hosting

https://ai-chefbot.netlify.app/ - hosted this project at this URL. Since API is not included for security reasons (I am yet to learn expressjs for backend 😅), it won't function dynamically. So, follow the above instructions to use it without problems.

https://www.linkedin.com/in/dhanush-shenoy-h/ - my LinkedIn profile.

# Nerd stuff

Used React for this project and hugging face mistral - "mistralai/Mixtral-8x7B-Instruct-v0.1" model. Used ReactMakdown ( a 3rd party react component ) to stylize the markup output I get from running Mistral. For more details, please refer the code. It isn't a very complex setup and is biggener-friendly code. ATB!
