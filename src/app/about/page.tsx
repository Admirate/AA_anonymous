import Image from "next/image";

const bodyText =
  "text-base leading-relaxed text-[#0d1b2a] sm:text-lg sm:leading-[1.6] md:text-xl md:leading-[1.65] lg:text-[25px] lg:leading-[1.6]";

export default function About() {
  return (
    <>
      <section className="relative flex min-h-[50vh] h-[55vh] items-center justify-center sm:h-[65vh] md:h-[70vh]">
        <Image
          src="/aa_4.jpg"
          alt="AAIRAW Conventions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 max-w-[min(100%,36rem)] px-4 text-center text-2xl font-bold leading-snug text-white sm:px-6 sm:text-3xl md:text-4xl lg:text-5xl">
          AAIRAW Conventions
        </h1>
      </section>

      <div className="bg-[#d8d8d4] text-[#0d1b2a]">
        {/* Row 1: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 border-b border-[#b0b0aa] md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between border-b border-[#b0b0aa] md:border-r lg:border-b-0 lg:border-r">
            <div className="p-4 sm:p-6 md:p-8">
              <p className={bodyText}>
                AAIRAW organizes conventions and roundups twice a year in
                different cities around the world.
              </p>
            </div>
            <div className="p-4 pt-0 sm:p-6 sm:pt-0 md:p-8 md:pt-0">
              <Image
                src="/aa_7.png"
                alt="Community gathering"
                width={234}
                height={300}
                className="h-auto w-full max-w-[200px] sm:max-w-[220px] md:max-w-[234px]"
              />
            </div>
          </div>

          <div className="flex h-full min-h-0 flex-col border-b border-[#b0b0aa] p-4 sm:p-6 md:border-r md:border-[#b0b0aa] lg:border-b-0">
            <div className="relative aspect-[4/3] min-h-[200px] w-full flex-1 overflow-hidden rounded-2xl sm:min-h-[280px] md:aspect-auto md:min-h-[320px] lg:min-h-[360px]">
              <Image
                src="/aa_5.jpg"
                alt="Community gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start p-4 sm:p-6 md:col-span-2 md:flex md:items-center md:justify-center md:py-10 md:text-center lg:col-span-1 lg:items-end lg:justify-end lg:py-8 lg:text-left">
            <p
              className={`${bodyText} text-left md:max-w-2xl lg:max-w-none lg:text-right`}
            >
              Conventions are a chance to reconnect with the community, make new
              friendships, and celebrate sobriety together.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 border-b border-[#b0b0aa] md:grid-cols-2">
          <div className="border-b border-[#b0b0aa] p-4 sm:p-6 md:border-b-0 md:border-r md:border-[#b0b0aa] md:p-8">
            <p className={`${bodyText} leading-[1.65] md:leading-[1.7]`}>
              These events bring together Indians in recovery to meet, share
              experiences, and support each other in staying sober. Members from
              different countries gather to talk about their journey, listen to
              others, and strengthen their recovery.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-1 items-center justify-center p-6 sm:p-8 md:p-10">
              <div className="h-32 w-32 rounded-full bg-[#0d1b2a] sm:h-40 sm:w-40 md:h-44 md:w-44" />
            </div>
            <div className="p-4 pt-0 text-left sm:p-6 sm:pt-0 md:p-8 md:pt-0 md:text-right">
              <p className={bodyText}>
                For many members, these gatherings are an important reminder that
                recovery is possible and that no one has to walk the path alone.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div>
          <div className="border-b border-[#b0b0aa] px-4 py-5 sm:px-6 sm:py-6 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#0d1b2a] sm:text-3xl">
              Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-b border-[#b0b0aa] p-4 sm:p-6 md:border-b-0 md:border-r md:border-[#b0b0aa] md:p-8">
              <div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-[#0d1b2a] sm:min-h-[240px] md:min-h-[220px]">
                <Image
                  src="/aa_3.jpg"
                  alt="Resources"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 p-4 sm:p-6 md:p-8">
              <div className="flex flex-1 items-center justify-center py-2">
                <Image
                  src="/aa_6.png"
                  alt="Community gathering"
                  width={234}
                  height={300}
                  className="h-auto w-full max-w-[180px] sm:max-w-[220px] md:max-w-[234px]"
                />
              </div>

              <div className="w-full text-left sm:text-right">
                <p className="mb-3 text-[13px] text-[#0d1b2a]">To read more.</p>
                <button
                  type="button"
                  className="w-full rounded-full bg-[#0d1b2a] px-6 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-80 sm:w-auto"
                >
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
