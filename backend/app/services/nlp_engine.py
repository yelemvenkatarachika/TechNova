from nltk.sentiment import SentimentIntensityAnalyzer

sia = SentimentIntensityAnalyzer()

def run_nlp_engine(text: str):

    sentiment = sia.polarity_scores(text)
    compound = sentiment["compound"]

    tags = []
    score = 0

    if compound < -0.4:
        score += 15
        tags.append("Emotional vulnerability detected")

    return {
        "nlp_score": score,
        "sentiment_score": compound,
        "tags": tags
    }