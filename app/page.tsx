import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Button color="primary" size="small" className="mx-auto my-[10%]">
        دکمه 1
      </Button>
      <Button color="secondary" size="small" className="mx-auto my-[10%]">
        دکمه 3
      </Button>
      <Button color="tertiary" size="small" className="mx-auto my-[10%]">
        دکمه 5
      </Button>
      <Button color="destructive" size="small" className="mx-auto my-[10%]">
        دکمه 7
      </Button>
    </div>
  );
}
