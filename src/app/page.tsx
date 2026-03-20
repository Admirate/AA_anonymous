import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[70vh] items-center justify-center">
        <Image
          src="/aa_1.jpg"
          alt="AA Indians in Recovery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 px-6 text-center text-3xl font-bold leading-snug text-white sm:text-4xl md:text-5xl">
          AA Indians in Recovery Across the World
        </h1>
      </section>

      {/* Content Grid */}
      <div className="border-t border-gray-300">
        {/* Intro Text Row */}
        <div className="border-b border-gray-300 px-8 py-10 sm:px-12">
          <p className="max-w-[857px] text-[32px] font-normal leading-[38px] text-[#161616]">
            AA Indians in Recovery Across the World (AAIRAW) is a global
            community of Indians who are living in recovery from alcoholism.
          </p>
        </div>

        {/* Center Image */}
        <div className="border-b border-gray-300 px-8 py-10 sm:px-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl">
            <Image
              src="/aa_2.jpg"
              alt="Community gathering"
              width={1776}
              height={816}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Two-Column: Text Rows Left + Image Right */}
        <div className="grid grid-cols-1 border-b border-gray-300 md:grid-cols-2">
          {/* Left Column — stacked text blocks */}
          <div className="md:border-r md:border-gray-300">
            <div className="border-b border-gray-300 px-8 py-10 sm:px-12">
              <p className="max-w-[857px] text-[32px] font-normal leading-[38px] text-[#161616]">
                Members connect across countries through shared experiences of
                sobriety and support. The community brings together people who
                understand the journey of recovery and want to live a healthier,
                sober life.
              </p>
            </div>
            <div className="space-y-8 px-8 py-10 sm:px-12">
              <p className="max-w-[857px] text-[32px] font-normal leading-[38px] text-[#161616]">
                AAIRAW meets twice a year through conventions and roundups held
                in different parts of the world. These gatherings help members
                reconnect, share their stories, and support one another in
                recovery.
              </p>
              <p className="max-w-[857px] text-[32px] font-normal leading-[38px] text-[#161616]">
                At its heart, AAIRAW is about fellowship, recovery, and staying
                connected as a community of Indians in recovery around the
                world.
              </p>
            </div>
          </div>

          {/* Right Column — image with gradient overlay */}
          <div className="relative min-h-[400px] p-6 md:p-8">
            <div className="relative h-full w-full overflow-hidden rounded-[40px]">
              <Image
                src="/aa_3.jpg"
                alt="Fellowship and recovery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,20,35,0.43)_56.25%] to-[rgba(10,77,137,0.43)_76.44%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
