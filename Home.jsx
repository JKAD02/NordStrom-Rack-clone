import "./home.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Home = () => {
  // "https://n.nordstrommedia.com/id/691f346b-379c-47cd-a614-6aabd4ed8be7.jpeg?h=700&w=1608"
  // console.log(slide[0])
  const slideImages = [
    {
      url: "https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg?h=200&w=1608",
    },
    {
      url: "https://n.nordstrommedia.com/id/ce7ea4f5-bf22-476a-836b-2194e885c59e.jpeg?h=200&w=1608",
    },
    {
      url: "https://n.nordstrommedia.com/id/8d7b4e36-aaac-4320-a8ad-debe74dacf0c.jpeg?h=200&w=1608",
    },
  ];

  const slideImages2 = [
    {
      url: "https://n.nordstrommedia.com/id/2749ff69-f124-4d9d-bb10-993652799a79.jpeg?h=700&w=1608",
      caption: {
        name: "All Dressed Up",
        subName: "Bold looks for all the summer soirées on your agenda.",
      },
    },
    {
      url: "https://n.nordstrommedia.com/id/691f346b-379c-47cd-a614-6aabd4ed8be7.jpeg?h=700&w=1608",
      caption: {
        name: "Color Therapy",
        subName:
          "Colorful eyeshadow and cheek palettes, blush, an eyeshadow stick, lipstick and lip liner.Color Therapy Bright, bold makeup is back with high-impact hues for eyes, lips and cheeks in every shade of the spectrum.",
      },
    },
    // {
    //   url: "https://n.nordstrommedia.com/id/8d7b4e36-aaac-4320-a8ad-debe74dacf0c.jpeg?h=200&w=1608",
    //   caption: {
    //     name: "All Dressed Up",
    //     subName: "nord",
    //   },
    // },
  ];

  return (
    <div className="main">
      {/* <div className="head">header</div> */}
      <div className="sale">
        <ul className="top">
          <ul>Sale</ul>
          <ul>Women</ul>
          <ul>Men</ul>
          <ul>Kids</ul>
          <ul>Young Adult</ul>
          <ul>Activewear</ul>
          <ul>Home</ul>
          <ul>Beauty</ul>
          <ul>Designer</ul>
          <ul>Gifts</ul>
          <ul>Brands</ul>
        </ul>
      </div>
      <div className="shop">
        <h3>Shop What you love-faster and easier</h3>
        <button className="sign">Sign in or create an account</button>
      </div>

      {/* display 1 */}
      <div className="display1">
        {/* <img
          src="https://n.nordstrommedia.com/id/ce7ea4f5-bf22-476a-836b-2194e885c59e.jpeg?h=200&w=1608"
          alt="nordstrom"
        /> */}
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              {/* <div style={{'backgroundImage': `url(${slideImage.url})`}}> */}
              <img src={slideImage.url} />
            </div>
          ))}
        </Slide>
      </div>
      {/* display2 */}
      <div className="display2">
        <Slide>
          {slideImages2.map((slideImages2, index) => (
            <div className="each-slide" key={index}>
              {/* <div style={{'backgroundImage': `url(${slideImage.url})`}}> */}
              <img src={slideImages2.url} />
              <span>
                <div>
                  <h3>{slideImages2.caption.name}</h3>
                </div>
                <div>{slideImages2.caption.subName}</div>
              </span>
            </div>
          ))}
        </Slide>
      </div>

      {/* great deals */}
      <div className="great">
        <h3>Great deals on popular items</h3>
        <p>New markdowns on our best-sellers</p>
      </div>
      <div className="image1">
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/ca236f8f-5060-48d5-be5e-1b0b04738222.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
        <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/0637d8a4-20be-4f5e-9086-6c03d2167c76.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
        <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/b73afbd9-e055-46d0-b7e7-2f5a852afa97.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
        <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/8adb15c8-1f95-42db-8a15-a62016353a29.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
        <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/a61276de-10d8-4f16-b6bc-410bde09ea3f.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
      </div>
      <div className="mom">
        <div className="formom">
          <img
            src="https://n.nordstrommedia.com/id/59f4195c-0e83-4694-8caa-023699806f73.jpeg?h=700&w=1608"
            alt="gift for mom"
          />
        </div>

        <div className="mother">
          <h3>Mother's Day Is This Sunday!</h3>
          <p>
            Need a perfect gift by Mother's Day? You can still get it in time
            with expedited shipping and store pickup options. See delivery dates
            at checkout.
          </p>
        </div>
      </div>
      <hr></hr>
      <div>
        <h2>TRENDING NOW</h2>
      </div>
      {/* trending now */}
      <div className="trending">
        <div className="opt">
          <img
            src="https://n.nordstrommedia.com/id/477f3419-48db-4448-bcdf-1ee9a9af1ca8.jpeg?h=522&w=804"
            alt="#"
          />
          <h3>It's All in the Shoe Details</h3>
          <p>
            Opt for eye-catching volume and interesting textures in the
            most-wanted spring sandals, from Circus by Sam Edelman and more.
          </p>
        </div>
        <div className="opt">
          <img
            src="https://n.nordstrommedia.com/id/7cae6918-5b6d-4855-967a-4318802fa308.jpeg?h=522&w=804"
            alt="#"
          />
          <h3>Celebrate in Style</h3>
          <p>
            From graduations to end-of-season parties, capture the joy of the
            moment with the perfect outfit.
          </p>
        </div>
      </div>
      <div className="confidence">
        <div className="cimg">
          <img
            src="https://n.nordstrommedia.com/id/65237083-ac2a-4dbf-9bb5-637d14d1de9b.jpeg?h=700&w=1608"
            alt="#"
          />
        </div>
        <div className="thenew">
          <h3>The New Sexy</h3>
          <p>Confidence is your best accessory with these standout styles.</p>
        </div>
      </div>
      <div>
        <h2>Shop the trend</h2>
      </div>
      <div className="image1">
      <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/0058e5b1-0ec4-433b-8c6a-18a0f69aea02.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/b502150c-1f76-4c2f-b19d-5aae9e4b153e.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/8e968b6d-65c4-4f47-9c1a-dd2e6ebf503c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/6cc48d7c-3468-4f6a-bd9a-feae6b755d9f.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/3ed2ed5b-fc33-4125-aade-b2a93374c45a.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="d1">
          <div>
            <img
              src="	https://n.nordstrommedia.com/id/7e999614-e6ab-4dbd-bf4b-433e24b9c6e1.jpeg?h=516&w=536"
              alt="#"
            />
          </div>
          <div>
            <h3>Introducing Misette</h3>
            <p>
              Artful dinnerware to elevate your everyday, with curated
              collections you can use as a complete set or mix and match for an
              effortless tablescape.
            </p>
          </div>
        </div>
        <div className="d1">
          <div>
            <img
              src="	https://n.nordstrommedia.com/id/984e1d98-87c3-4ad6-891c-00718b70ae97.jpeg?h=516&w=536"
              alt="#"
            />
          </div>
          <div>
            <h3>New Arrivals from LAGOS</h3>
            <p>
              Treat yourself to gorgeous styles from the Caviar Color and Covet
              collections.
            </p>
          </div>
        </div>
        <div className="d1">
          <div>
            <img
              src="	https://n.nordstrommedia.com/id/22a3e98f-09d6-4acf-a650-b1c6d5755457.jpeg?h=516&w=536"
              alt="#"
            />
          </div>
          <div>
            <h3>Nude Is Not One Color</h3>
            <p>
              Nordstrom intimates that celebrate your skin, now in even more
              shades and sizes.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <h2>SHOP YOUR WAY</h2>
      </div>
      <div>
        <img
          src="https://n.nordstrommedia.com/id/9af9866a-ff51-45fe-b2fe-3f5a33fc811e.jpeg?h=400&w=1608"
          alt="#"
        />
      </div>
      {/* Best-selling items */}
      <div className="great">
        <h3>Best-selling items</h3>
        <p>The most-purchased items on our site right now</p>
      </div>
      <div className="image1">
      <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/1de4dab7-a398-422c-8784-0312342e026b.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/776ef265-e215-4661-b327-4ef5c7a54842.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/2417d32b-eb39-4e84-a9bd-1ec649b5c0d6.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/faed4a75-1683-4e92-983a-ad4013197789.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/7f60be83-bde1-4b87-95a2-b239ead61791.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <h2>SHOP BY CATEGORY</h2>
      </div>
      <div className="cat">
        <div className="d2">
          <div>
            <img
              src="	https://n.nordstrommedia.com/id/e3c5e72c-fb7f-4b15-a9cb-2979ee1f58ff.jpeg?h=365&w=268"
              alt="#"
            />
          </div>
          <div>
            <h4>Women</h4>
          </div>
        </div>
        <div className="d2">
          <div>
            <img
              src="https://n.nordstrommedia.com/id/59e0456f-9d43-4659-9541-e629f8a6b217.jpeg?h=365&w=268"
              alt="#"
            />
          </div>
          <div>
            <h4>Men</h4>
          </div>
        </div>
        <div className="d2">
          <div>
            <img
              src="https://n.nordstrommedia.com/id/e87bc8b2-4de9-415e-a762-abf2597572b0.jpeg?h=365&w=268"
              alt="#"
            />
          </div>
          <div>
            <h4>Kids</h4>
          </div>
        </div>
        <div className="d2">
          <div>
            <img
              src="https://n.nordstrommedia.com/id/aad0e43a-9790-49e3-aa60-43a61d81ba0e.jpeg?h=365&w=268"
              alt="#"
            />
          </div>
          <div>
            <h4>Home</h4>
          </div>
        </div>
        <div className="d2">
          <div>
            <img
              src="https://n.nordstrommedia.com/id/466f1c26-aede-4ead-8fd3-3e6164d1e43a.jpeg?h=365&w=268"
              alt="#"
            />
          </div>
          <div>
            <h4>Beauty & Fragrance</h4>
          </div>
        </div>
        <div className="d2">
          <div>
            <img
              src="https://n.nordstrommedia.com/id/30ddbbf9-fcc5-464f-99dd-ddc637bb6f98.jpeg?h=365&w=268"
              alt="#"
            />
          </div>
          <div>
            <h4>Designer</h4>
          </div>
        </div>
      </div>
      <div>
        <h2>CURRENTLY LOVING</h2>
        <p>
          Explore favorite looks from Instagram. Tag @Nordstrom to show us your
          finds.
        </p>
      </div>
      {/* currently loving */}
      <div className="loving">
        <div>
          <img
            src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjUwNDc3MjM0LjI0MDgwNzUxMDg4NC5qcGVn.jpg?w=640&h=640&fit=cover"
            alt="#"
          />
        </div>
        <div>
          <img
            src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ5MTc2MTQ4LjEzMjExMDg0MzExNS5qcGVn.jpg?w=640&h=640&fit=cover"
            alt="#"
          />
        </div>
        <div>
          <img
            src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjUwNDcyNjY2LjU2NTExODg4NTEwNi5qcGVn.jpg?w=640&h=640&fit=cover"
            alt="#"
          />
        </div>
        <div>
          <img
            src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ5Njg1MDg4LjgxMjg4NDM4OTU5NC5qcGVn.jpg?w=640&h=640&fit=cover"
            alt="#"
          />
        </div>
      </div>
      {/* trending near you */}
      <div className="great">
        <h3>Trending near you</h3>
        <p>The most-viewed items by shoppers in your area</p>
      </div>
      <div className="image1">
      <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/058c565c-a25a-40cd-9223-f43d6ba58995.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/de880f09-2a1e-4fcc-b942-1cea29d568fd.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/75173056-73bd-4dd5-b564-e6039b85cee9.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/331d3f3e-2c36-46a3-94a9-713f3b204c35.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
        <div>
          <div className="pimage">
            <img
              src="https://n.nordstrommedia.com/id/sr3/3c393ec9-0275-4725-a9f4-39f8008437b4.jpeg?q=45&dpr=2&h=365.31&w=230"
              alt="#"
            />
          </div>
          <div className="product">
            <p>Dolce Vite</p>
            <p>INR 4270.00 - INR 5,338.36</p>
            <p>(Up to 20% off)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Home };
