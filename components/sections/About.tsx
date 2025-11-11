import { Skeleton } from "@/components/ui/skeleton";

export function About() {
  return (
    <div id="sobre" className="w-full py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="w-full md:w-1/3">
            <Skeleton className="h-96 w-full rounded-lg shadow-lg md:min-h-[400px]" />
          </div>
          <div className="w-full space-y-6 text-center md:w-2/3 md:text-left">
            <h2 className="text-center text-4xl font-bold tracking-tighter">
              Sobre Mim
            </h2>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                Magni minus vero exercitationem et dolor sed voluptatem.
                Quibusdam aut esse iusto ullam provident. Est enim corporis
                nihil molestias repudiandae repudiandae vel. Mollitia eos in
                omnis illum repellat sit nihil libero. Sequi earum similique
                cupiditate.
              </p>
              <p>
                Magni minus vero exercitationem et dolor sed voluptatem.
                Quibusdam aut esse iusto ullam provident. Est enim corporis
                nihil molestias repudiandae repudiandae vel. Mollitia eos in
                omnis illum repellat sit nihil libero. Sequi earum similique
                cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
