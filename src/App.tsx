import "./App.css";
import { Button } from "@/components/ui/button"
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

import { cn } from "./lib/utils";
import { toast, Toaster } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"

function App() {
  const isActive = true;

  return (
    <div>
      {/*1. 타이포그래프*/}
      <div className="text-xs text-red-500">test-xs</div>
      <div className="text-sm text-[rgb(100,200,300)]">test-sm</div>
      <div className="text-lg font-bold">test-lg</div>
      <div className="text-xl">test-xl</div>
      <div className="text-2xl">test-2xl</div>
      <div className="text-[13px]">test-13px</div>

      {/*2. 백그라운드*/}
      <div className="bg-amber-500">background</div>

      {/*3. 사이즈*/}
      <div className="w-20 bg-blue-500">box</div>

      {/*4. 여백*/}
      <div className="m-5 h-50 w-50 bg-red-400 p-5">
        <div className="h-full w-full bg-sky-500"></div>
      </div>

      {/*5. 테두리*/}
      <div className="m-5 border-x-2 border-r-3 border-red-500"></div>

      {/*6. 플렉스 컨테이너 (배치)*/}
      <div className="flex">
        <div className="w-10 border">1</div>
        <div className="w-10 border">2</div>
        <div className="w-10 border">3</div>
        <div className="w-10 border">4</div>
      </div>

      <Button>버튼</Button>
      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>
      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>isActive</div>

      <Button variant={"destructive"}>버튼</Button>
      <Button variant={"ghost"}>버튼</Button>
      <Button variant={"link"}>버튼</Button>
      <Button variant={"outline"}>버튼</Button>
      <Button variant={"secondary"}>버튼</Button>
      <Input></Input>
      <Textarea></Textarea>
      <Toaster></Toaster>
      <Button onClick={() => {
        toast("test", {position: "top-center"});
      }}>Sonner</Button>

      <Carousel className="mx-10">
      <CarouselContent>
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <Popover>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>

    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div>body</div>
      </DialogContent>
    </Dialog>

    <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  );
}

export default App;
