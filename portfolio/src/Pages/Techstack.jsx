import React from "react";
import Footer from "../Components/Footer";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Components/ui/select";

export default function Techstack() {
  return (
    <>
      <section className="w-full h-auto bg-[#fff] overflow-y-auto">
        <div className="flex justify-center items-center h-screen">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Footer />
      </section>
    </>
  );
}
