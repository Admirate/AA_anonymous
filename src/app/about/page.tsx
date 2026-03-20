import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[70vh] items-center justify-center">
        <Image
          src="/aa_4.jpg"
          alt="AAIRAW Conventions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 px-6 text-center text-3xl font-bold leading-snug text-white sm:text-4xl md:text-5xl">
          AAIRAW Conventions
        </h1>
      </section>

      {/* ── POST-HERO CONTENT ── */}
      <div className="bg-[#d8d8d4] text-[#0d1b2a]">

        {/* ── ROW 1: 3-column grid ── */}
        <div className="grid grid-cols-3 border-b border-[#b0b0aa]">

          {/* Col 1 – text top-left + icon bottom-left */}
          <div className="flex flex-col justify-between border-r border-[#b0b0aa]">
            <div className="p-8">
              <p className="text-[25px] leading-[1.6] text-[#0d1b2a]">
                AAIRAW organizes conventions and roundups twice a year in
                different cities around the world.
              </p>
            </div>
            <div className="p-8">
              <Image
                src="/aa_7.png"
                alt="Community gathering"
                width={234}
                height={300}
              />
            </div>
          </div>

          {/* Col 2 – photo */}
          <div className="border-r border-[#b0b0aa] p-6">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl">
              <Image
                src="/aa_5.jpg"
                alt="Community gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Col 3 – text bottom-right */}
          <div className="flex items-end justify-end p-8">
            <p className="text-right text-[25px] leading-[1.6] text-[#0d1b2a]">
              Conventions are a chance to reconnect with the community, make new
              friendships, and celebrate sobriety together.
            </p>
          </div>
        </div>

        {/* ── ROW 2: 2-column grid ── */}
        <div className="grid grid-cols-2 border-b border-[#b0b0aa]">

          {/* Left – body text */}
          <div className="border-r border-[#b0b0aa] p-8">
            <p className="text-[25px] leading-[1.7] text-[#0d1b2a]">
              These events bring together Indians in recovery to meet, share
              experiences, and support each other in staying sober. Members from
              different countries gather to talk about their journey, listen to
              others, and strengthen their recovery.
            </p>
          </div>

          {/* Right – dark circle + caption text */}
          <div className="flex flex-col">
            {/* Dark filled circle */}
            <div className="flex flex-1 items-center justify-center p-10">
              <div className="h-44 w-44 rounded-full bg-[#0d1b2a]" />
            </div>
            {/* Caption below circle, right-aligned */}
            <div className="p-8 pt-0 text-right">
              <p className="text-[25px] leading-[1.6] text-[#0d1b2a]">
                For many members, these gatherings are an important reminder
                that recovery is possible and that no one has to walk the path
                alone.
              </p>
            </div>
          </div>
        </div>

        {/* ── RESOURCES SECTION ── */}
        <div>
          {/* Header */}
          <div className="border-b border-[#b0b0aa] px-8 py-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#0d1b2a]">
              Resources
            </h2>
          </div>

          {/* 2-column grid */}
          <div className="grid grid-cols-2">

            {/* Left – dark image */}
            <div className="border-r border-[#b0b0aa] p-8">
              <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-[#0d1b2a]">
                <Image
                  src="/aa_3.jpg"
                  alt="Resources"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>

            {/* Right – figure icon + "To read more" + button */}
            <div className="flex flex-col items-center justify-between p-8">
              {/* Icon */}
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/aa_6.png"
                  alt="Community gathering"
                  width={234}
                  height={300}
                />
              </div>

              {/* CTA */}
              <div className="w-full text-right">
                <p className="mb-3 text-[13px] text-[#0d1b2a]">To read more.</p>
                <button className="rounded-full bg-[#0d1b2a] px-6 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-80">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}