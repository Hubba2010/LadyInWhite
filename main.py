from flask import Flask, render_template

app = Flask(__name__)


@app.route("/", methods=["GET"])
def StronaGlowna():
    return render_template("base.html")

@app.route("/galeria")
def Galeria():
    return render_template("gallery.html")

if __name__ == '__main__':
     app.run()
