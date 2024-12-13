'use client'

import { delay, easeIn, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
// import TextArea  from "@/components/ui/"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import PrimaryButton from "@/components/Primary-btn";
import { toast } from 'react-toastify';
import ContactForm from "@/components/ContactForm";


const Contact = () => {



    return (
       <>


<ContactForm />

       </>
    )
}

export default Contact;     