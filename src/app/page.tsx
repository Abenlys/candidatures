import { Calendar } from "@/components/ui/calendar";
import { CardWithForm } from "../components/CardwithForm";
import ThemeDisplay from "@/components/theme-display";
import { CalendarDemo } from "@/components/Calendar";


export default function Home() {
  return (
    <div>
      <ThemeDisplay />
      <CardWithForm />
      <CalendarDemo />
    </div>
    
  );
}
