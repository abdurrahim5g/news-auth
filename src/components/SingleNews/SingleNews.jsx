import { Badge, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import "./SingleNews.css";

// eslint-disable-next-line react/prop-types
const SingleNews = ({ singleNews, isSingle = false }) => {
  const {
    _id,
    category_id,
    total_view,
    title,
    author,
    image_url,
    thumbnail_url,
    details,
  } = singleNews;

  console.log(singleNews);
  return (
    <article className="single-news">
      <Card>
        {isSingle && <Card.Header>Featured</Card.Header>}
        <div className="news-image">
          <Card.Img variant="top" src={image_url} />
          <span className="total-views">
            <Badge bg="primary shadow">
              <FaEye /> {total_view ? total_view : 0}
            </Badge>
          </span>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>
            <em>Catagory:</em> Breaking news
          </p>
          <Card.Text>
            {isSingle ? (
              details
            ) : (
              <>
                {details.slice(0, 120)}
                {"... "}
                <Link to={`/news/${_id}`}> Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
};

export default SingleNews;

// {
//     "_id": "61f9ce168f7b15aadecb1d1fc80c72f7",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": false
//     },
//     "category_id": "04",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 100,
//     "title": "“Max Verstappen has plenty trophies” – Lando Norris wants $50 Million a year Dutch sensation to give him his trophy",
//     "author": {
//         "name": "system",
//         "published_date": "2022-08-26 00:37:24",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/1rcTYYB/unsplash-Eh-Tc-C9s-YXsw-16.png",
//     "image_url": "https://i.ibb.co/CVg1Nrt/unsplash-Eh-Tc-C9s-YXsw-5.png",
//     "details": "Lando Norris asks Max Verstappen to lend him the 2022 Dutch GP trophy as he predicts the Dutchman as a sure winner. Max Verstappen returns to his home Grand Prix in Zandvoort for the 2022 Dutch GP. And it seems like the Dutchman will enjoy another easy victory this weekend. Max has a 93-point advantage in the drivers’ championship over Ferrari’s Charles Leclerc ahead of the race. And at this rate, Max can cruise comfortably, to claim his 2nd Championship title this season. But Max does not want to lose his focus and momentum ahead of his home GP. He wants to claim his 10th win of the season in front of his home crowd in style. Recently, the Dutch GP unveiled a rather unique-looking trophy. And McLaren driver Lando Norris liked the new trophy.   a journalist asks lando if he likes the dutch gp trophy and if it will be his on sunday: “no, it’s max’s. everyone knows it’s max’s already. maybe max will give it to me, he has plenty.” i love lando norris and max verstappen friendship pic.twitter.com/LQh9cnwjLv — comfort lando norris (@safeforlando) August 31, 2022 The Brit was grabbing a bicycle in the F1 paddock when he was interviewed by Dutch press personnel. Norris was asked what he thought of the Dutch Grand Prix trophy. Norris replied, “Oh I loved it.” But he admitted he would not be able to take the trophy home. He said, “No, it’s Max’s. Everyone knows it’s Max’s already. Maybe he will give it to me, he has plenty.” Seems like Norris is not alone. As it is becoming more obvious amongst the drivers that the Dutch GP trophy has Max’s name written on it. And with a win this Sunday, even the Championship might have Max’s name for a second time. Also Read: Lando Norris hits out at Daniel Ricciardo amidst his $16.7 Million contract termination Max Verstappen unveils a new helmet for the Dutch GP Max Verstappen became the first Dutch driver to win an F1 race when he won the 2016 Spanish GP. He also became the first Dutchman to win the Championship title. And he would like to pay tribute to his father, Jos Verstappen who coached him during his karting days and developed him as a racing driver. Jos has also served as a manager for Max. Jos was an F1 driver who raced in F1 from 1994 to 2003. He has 106 race starts with no wins and he raced for a variety of teams from Benetton, Arrows, Tyrell and Honda. And for the Dutch GP, Max would be wearing a helmet that resembles the one worn by his father. He will be wearing it on a track on which he has raced numerous times while Karting with his father.   ᴀ ᴛʀɪʙᴜᴛᴇ ᴛᴏ ᴊᴏs ᴠᴇʀsᴛᴀᴘᴘᴇɴ Returning to Zandvoort as a World Champion, Max chose to honor his mentor and Dad by using Jos his iconic helmet design as an inspiration 1:2 and 1:4 scale models are now available https://t.co/SxY1Y14OH2 pic.twitter.com/tz2DdtXJM4 — Max Verstappen (@VerstappenCOM) August 30, 2022 Verstappen said in a video posted by him, “It’s a bit emotional as well. But I think it’s just really special to drive something like this because it’s also how I started in go-karting.” He added, “All the old pictures I have of go-karting are with this iconic design. So that’s why we thought it was a great idea to bring this back alive around Zandvoort.” Jos has never won a race in his F1 career. But wearing this helmet, Max might win his 10th race of the season and cement his name on the Championship trophy. Also Read: Max Verstappen can equalize Michael Schumacher-Sebastian Vettel joint record if he wins 4 more races in 2022 The post “Max Verstappen has plenty trophies” – Lando Norris wants $50 Million a year Dutch sensation to give him his trophy appeared first on The SportsRush."
// }
