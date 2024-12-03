import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="flex gap-4">
        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-4">
            Gestisci le tue finanze in modo <br /> semplice e intuitivo
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt malesuada ornare. Phasellus risus
            quam, viverra eu scelerisque non, scelerisque sed orci. Maecenas pulvinar lectus sit amet condimentum
            consectetur.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="/hero.webp"
            width={400}
            height={400}
            alt="Hero image"
          />
        </div>
      </section>
    </div>
  );
}
