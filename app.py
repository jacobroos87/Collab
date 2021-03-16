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


@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")


@app.route("/contact_us")
def contact_us():
    return render_template("contact_us.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
