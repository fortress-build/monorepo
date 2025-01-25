import {
    // Montserrat as MontserratFont,
    // Raleway as RalewayFont,
    // Montserrat_Alternates,
    // Import DBSans
    Lexend as LexendFont,
    DM_Sans as DMSansFont,
    DM_Mono as DMMonoFont,
    Poppins as PoppinsFont,
  } from "next/font/google";
  
  // Remove Montserrat and replace with DBSans
  export const DMMono = DMMonoFont({
    weight: ["300", "400", "500"],
    style: ["normal", "italic"],
    subsets: ["latin"],
  });
  
  export const Lexend = LexendFont({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal"],
    subsets: ["latin"],
  });
  
  // Replace Montserrat with DBSans
  export const DMSans = DMSansFont({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
  });
  
  export const Poppins = PoppinsFont({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-sans",
  });