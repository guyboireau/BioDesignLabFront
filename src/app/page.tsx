import Image from 'next/image';

export default function BlogArticle() {
  return (
    //page de blog
    <div className="container">
      <h1>Blog</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <Image
              src="/images/1.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />

            <div className="card-body">
              <h5 className="card-title">Article 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, cumque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
