import api from '../../api/api.js'

export const getQuotes = async (req, res, next) => {
  try {
    // const response = await api.get('/quotes')
    // res.status(200).json({
    //   message: 'Fetched quotes successfully',
    //   quotes: response.data.quotes,
    //   totalItems: response.data.quotes.length
    // })
    res.status(200).json({
      message: "Fetched quotes successfully",
      quotes: [
        {
          "id": 26536,
          "dialogue": false,
          "private": false,
          "tags": [
            "god"
          ],
          "url": "https://favqs.com/quotes/mark-twain/26536-only-one-thin-",
          "favorites_count": 1,
          "upvotes_count": 2,
          "downvotes_count": 0,
          "author": "Mark Twain",
          "author_permalink": "mark-twain",
          "body": "Only one thing is impossible for God: To find any sense in any copyright law on the planet."
        },
        {
          "id": 59998,
          "dialogue": false,
          "private": false,
          "tags": [
            "wisdom"
          ],
          "url": "https://favqs.com/quotes/marcus-tullius-cicero/59998-nobody-can-gi-",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Marcus Tullius Cicero",
          "author_permalink": "marcus-tullius-cicero",
          "body": "Nobody can give you wiser advice than yourself."
        },
        {
          "id": 63861,
          "dialogue": false,
          "private": false,
          "tags": [],
          "url": "https://favqs.com/quotes/hp/63861-test",
          "favorites_count": 2,
          "upvotes_count": 0,
          "downvotes_count": 0,
          "author": "hp",
          "author_permalink": "hp",
          "body": "test"
        },
        {
          "id": 23291,
          "dialogue": false,
          "private": false,
          "tags": [
            "forgiveness"
          ],
          "url": "https://favqs.com/quotes/friedrich-nietzsche/23291-if-there-is-s-",
          "favorites_count": 0,
          "upvotes_count": 2,
          "downvotes_count": 0,
          "author": "Friedrich Nietzsche",
          "author_permalink": "friedrich-nietzsche",
          "body": "If there is something to pardon in everything, there is also something to condemn."
        },
        {
          "id": 44970,
          "dialogue": false,
          "private": false,
          "tags": [
            "nature"
          ],
          "url": "https://favqs.com/quotes/kurt-vonnegut/44970-if-people-thi-",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Kurt Vonnegut",
          "author_permalink": "kurt-vonnegut",
          "body": "If people think nature is their friend, then they sure don't need an enemy."
        },
        {
          "id": 710,
          "dialogue": false,
          "private": false,
          "tags": [
            "age",
            "good"
          ],
          "url": "https://favqs.com/quotes/confucius/710-old-age-believe-",
          "favorites_count": 1,
          "upvotes_count": 2,
          "downvotes_count": 0,
          "author": "Confucius",
          "author_permalink": "confucius",
          "body": "Old age, believe me, is a good and pleasant thing. It is true you are gently shouldered off the stage, but then you are given such a comfortable front stall as spectator."
        },
        {
          "id": 677,
          "dialogue": false,
          "source": "https://www.youtube.com/watch?v=Pa1ImgOcOPM&t=3m15s",
          "private": false,
          "tags": [],
          "url": "https://favqs.com/quotes/carl-sagan/677-the-cosmos-is-a-",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Carl Sagan",
          "author_permalink": "carl-sagan",
          "body": "The cosmos is all that is, or ever was, or ever will be."
        },
        {
          "id": 38770,
          "dialogue": false,
          "private": false,
          "tags": [
            "love",
            "women"
          ],
          "url": "https://favqs.com/quotes/george-bernard-shaw/38770-the-ficklenes-",
          "favorites_count": 2,
          "upvotes_count": 2,
          "downvotes_count": 0,
          "author": "George Bernard Shaw",
          "author_permalink": "george-bernard-shaw",
          "body": "The fickleness of the women I love is only equalled by the infernal constancy of the women who love me."
        },
        {
          "id": 1706,
          "dialogue": false,
          "private": false,
          "tags": [
            "alone"
          ],
          "url": "https://favqs.com/quotes/audrey-hepburn/1706-i-don-t-want-t-",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Audrey Hepburn",
          "author_permalink": "audrey-hepburn",
          "body": "I don't want to be alone, I want to be left alone."
        },
        {
          "id": 480,
          "dialogue": false,
          "private": false,
          "tags": [
            "conquer",
            "overcome",
            "failure",
            "chinese",
            "philosopher"
          ],
          "url": "https://favqs.com/quotes/confucius/480-our-greatest-gl-",
          "favorites_count": 5,
          "upvotes_count": 3,
          "downvotes_count": 0,
          "author": "Confucius",
          "author_permalink": "confucius",
          "body": "Our greatest glory is not in never falling, but in rising every time we fall."
        },
        {
          "id": 4422,
          "dialogue": false,
          "private": false,
          "tags": [
            "art"
          ],
          "url": "https://favqs.com/quotes/harry-s-truman/4422-art-is-parasit-",
          "favorites_count": 0,
          "upvotes_count": 2,
          "downvotes_count": 0,
          "author": "Harry S. Truman",
          "author_permalink": "harry-s-truman",
          "body": "Art is parasitic on life, just as criticism is parasitic on art."
        },
        {
          "id": 42896,
          "dialogue": false,
          "private": false,
          "tags": [
            "motivational"
          ],
          "url": "https://favqs.com/quotes/benjamin-disraeli/42896-never-complai-",
          "favorites_count": 7,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Benjamin Disraeli",
          "author_permalink": "benjamin-disraeli",
          "body": "Never complain and never explain."
        },
        {
          "id": 3653,
          "dialogue": false,
          "private": false,
          "tags": [
            "anger"
          ],
          "url": "https://favqs.com/quotes/benjamin-franklin/3653-whatever-is-be-",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Benjamin Franklin",
          "author_permalink": "benjamin-franklin",
          "body": "Whatever is begun in anger ends in shame."
        },
        {
          "id": 627,
          "dialogue": false,
          "private": false,
          "tags": [
            "apple"
          ],
          "url": "https://favqs.com/quotes/steve-jobs/627-it-s-more-fun-t-",
          "favorites_count": 3,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Steve Jobs",
          "author_permalink": "steve-jobs",
          "body": "It's more fun to be a pirate than to join the navy."
        },
        {
          "id": 520,
          "dialogue": false,
          "private": false,
          "tags": [
            "quotes",
            "writer",
            "argentine"
          ],
          "url": "https://favqs.com/quotes/jorge-luis-borges/520-life-itself-is--",
          "favorites_count": 2,
          "upvotes_count": 0,
          "downvotes_count": 0,
          "author": "Jorge Luis Borges",
          "author_permalink": "jorge-luis-borges",
          "body": "Life itself is a quotation."
        },
        {
          "id": 62059,
          "dialogue": false,
          "private": false,
          "tags": [],
          "url": "https://favqs.com/quotes/abdu-l-baha/62059-to-be-approve-",
          "favorites_count": 2,
          "upvotes_count": 0,
          "downvotes_count": 0,
          "author": "Abdu'l-Baha",
          "author_permalink": "abdu-l-baha",
          "body": "To be approved of God alone should be one's aim."
        },
        {
          "id": 45829,
          "dialogue": false,
          "private": false,
          "tags": [
            "peace"
          ],
          "url": "https://favqs.com/quotes/johann-wolfgang-von-goethe/45829-on-all-the-pe-",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Johann Wolfgang von Goethe",
          "author_permalink": "johann-wolfgang-von-goethe",
          "body": "On all the peaks lies peace."
        },
        {
          "id": 38326,
          "dialogue": false,
          "private": false,
          "tags": [
            "life"
          ],
          "url": "https://favqs.com/quotes/leo-tolstoy/38326-without-knowi-",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Leo Tolstoy",
          "author_permalink": "leo-tolstoy",
          "body": "Without knowing what I am and why I am here, life is impossible."
        },
        {
          "id": 311,
          "dialogue": false,
          "private": false,
          "tags": [
            "violence"
          ],
          "url": "https://favqs.com/quotes/isaac-asimov/311-violence-is-the-",
          "favorites_count": 4,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Isaac Asimov",
          "author_permalink": "isaac-asimov",
          "body": "Violence is the last refuge of the incompetent."
        },
        {
          "id": 24271,
          "dialogue": false,
          "private": false,
          "tags": [
            "friendship"
          ],
          "url": "https://favqs.com/quotes/muhammad-ali/24271-friendship-is-",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Muhammad Ali",
          "author_permalink": "muhammad-ali",
          "body": "Friendship... is not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything."
        },
        {
          "id": 13649,
          "dialogue": false,
          "private": false,
          "tags": [
            "death",
            "life"
          ],
          "url": "https://favqs.com/quotes/confucius/13649-death-and-lif-",
          "favorites_count": 2,
          "upvotes_count": 2,
          "downvotes_count": 0,
          "author": "Confucius",
          "author_permalink": "confucius",
          "body": "Death and life have their determined appointments riches and honors depend upon heaven."
        },
        {
          "id": 47547,
          "dialogue": false,
          "private": false,
          "tags": [
            "politics"
          ],
          "url": "https://favqs.com/quotes/mason-cooley/47547-office-politi-",
          "favorites_count": 1,
          "upvotes_count": 3,
          "downvotes_count": 0,
          "author": "Mason Cooley",
          "author_permalink": "mason-cooley",
          "body": "Office politics are bloody-minded, but weak on content."
        },
        {
          "id": 613,
          "dialogue": true,
          "source": "https://www.youtube.com/watch?v=iK6hI423gcw&t=7s",
          "private": false,
          "tags": [
            "religion",
            "god",
            "movie",
            "ghostbusters"
          ],
          "url": "https://favqs.com/quotes/winston/613-do-you-believe--",
          "favorites_count": 2,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "lines": [
            {
              "position": 1,
              "body": "Do you believe in God?",
              "author": "Winston",
              "author_permalink": "winston"
            },
            {
              "position": 2,
              "body": "Never met him.",
              "author": "Ray",
              "author_permalink": "ray"
            }
          ]
        },
        {
          "id": 4345,
          "dialogue": false,
          "private": false,
          "tags": [
            "art",
            "truth"
          ],
          "url": "https://favqs.com/quotes/friedrich-nietzsche/4345-we-have-art-in-",
          "favorites_count": 3,
          "upvotes_count": 1,
          "downvotes_count": 0,
          "author": "Friedrich Nietzsche",
          "author_permalink": "friedrich-nietzsche",
          "body": "We have art in order not to die of the truth."
        },
        {
          "id": 27369,
          "dialogue": false,
          "private": false,
          "tags": [
            "good"
          ],
          "url": "https://favqs.com/quotes/mark-twain/27369-there-are-sev-",
          "favorites_count": 0,
          "upvotes_count": 2,
          "downvotes_count": 0,
          "author": "Mark Twain",
          "author_permalink": "mark-twain",
          "body": "There are several good protections against temptation, but the surest is cowardice."
        }
      ],
      totalItems: 25
    })
  } catch (err) {
    const lol = err.message
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
