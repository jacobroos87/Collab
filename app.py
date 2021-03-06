import os
from flask import (
    Flask, flash, render_template,
    redirect, request, url_for)

if os.path.exists("env.py"):
    import env


app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
