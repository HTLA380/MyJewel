"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { VscSend } from "react-icons/vsc"
import { LiaFacebook, LiaInstagram } from "react-icons/lia"
import { useState } from "react"
import { Alert, AlertDescription } from "@/app/components/ui/alert"
import { LuCircleCheck, LuCircleAlert, LuLoaderCircle } from "react-icons/lu"
import { cn } from "@/lib/utils"

const LINKS = [
  {
    title: "Contact Us",
    items: [
      { label: "Book Appointment", href: "#" },
      { label: "Visit Our Stores", href: "#" },
      { label: "Email Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Schedule a consultation", href: "#" },
    ],
  },
  {
    title: "The Art of Gifting",
    items: [
      { label: "Luxury Gift Wrapping", href: "#" },
      { label: "Gift Cards", href: "#" },
      { label: "Private & White-Glove Delivery", href: "#" },
    ],
  },
  {
    title: "Bespoke & Services",
    items: [
      { label: "Custom Jewelry Design", href: "#" },
      { label: "Private Jewelry Consultations", href: "#" },
      { label: "Jewelry Restoration & Care", href: "#" },
    ],
  },
]

/* -------------------------------------------------------------------------- */

const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
})

type EmailFormData = z.infer<typeof emailSchema>

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Subscribing email:", data.email)

      setSubmitStatus({
        type: "success",
        message: "Thank you for subscribing! We'll keep you updated.",
      })

      reset()
      // eslint-disable-next-line
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 3000)
    }
  }

  return (
    <footer className="flex w-full justify-center bg-background-secondary">
      <div className="flex w-full max-w-screen-xl flex-col">
        <div className="flex gap-5 pb-[3.6875rem] pt-[5.375rem]">
          {LINKS.map((section) => (
            <div key={section.title} className="flex h-[13.125rem] w-[14.625rem] flex-col gap-[0.5625rem]">
              <h5 className="min-h-[1.3125rem] font-dm-sans text-base font-semibold uppercase leading-100% tracking-1% text-foreground-secondary">
                {section.title}
              </h5>
              <ul className="font-dm-sans text-sm font-normal leading-30px tracking-1% text-foreground-secondary">
                {section.items.map((item) =>
                  item.href ? (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="transition-colors hover:text-foreground-primary-emphasis hover:underline">
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li key={item.label}>{item.label}</li>
                  ),
                )}
              </ul>
            </div>
          ))}

          <div className="flex h-[13.125rem] w-[28.375rem] flex-col pl-2.5">
            <h5 className="min-h-[1.3125rem] font-dm-sans text-base font-semibold leading-100% tracking-1% text-foreground-secondary">
              Let&apos;s Keep In Touch
            </h5>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-2.5 flex w-full max-w-[26.25rem] flex-col">
              <div className="flex items-center">
                <div className="relative flex-1">
                  <input
                    {...register("email")}
                    type="email"
                    className={cn(
                      "h-[2.875rem] w-full border-r-0 px-2.5 py-3 font-dm-sans text-sm font-normal leading-160% tracking-3% text-foreground-secondary transition-colors placeholder:text-foreground-secondary/60",
                      errors.email
                        ? "border border-red-500 bg-red-50"
                        : isValid && register("email").name
                          ? "border border-green-500 bg-green-50"
                          : "border bg-background",
                    )}
                    placeholder="Email address"
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className={cn(
                    "flex size-[2.875rem] items-center justify-center transition-all",
                    isSubmitting || !isValid
                      ? "cursor-not-allowed bg-button-primary/50 text-white"
                      : "bg-button-primary text-white",
                  )}
                  aria-label="Subscribe to newsletter">
                  {isSubmitting ? <LuLoaderCircle size={18} className="animate-spin" /> : <VscSend size={18} />}
                </button>
              </div>

              {/* Error message */}
              {errors.email && (
                <div className="mt-2 flex items-center gap-2 text-red-600">
                  <LuCircleAlert size={16} />
                  <span className="font-dm-sans text-sm">{errors.email.message}</span>
                </div>
              )}

              {/* Success/Error status */}
              {submitStatus.type && (
                <Alert
                  variant={submitStatus.type === "error" ? "destructive" : "default"}
                  className={`mt-3 ${
                    submitStatus.type === "success"
                      ? "border-green-500 bg-green-50 text-green-800"
                      : "border-red-500 bg-red-50 text-red-800"
                  }`}>
                  {submitStatus.type === "success" ? (
                    <LuCircleCheck className="size-4" />
                  ) : (
                    <LuCircleAlert className="size-4" />
                  )}
                  <AlertDescription className="font-dm-sans text-sm">{submitStatus.message}</AlertDescription>
                </Alert>
              )}
            </form>

            <div className="mt-9 flex flex-col gap-[0.925rem]">
              <h5 className="min-h-[1.3125rem] font-dm-sans text-base font-semibold leading-100% tracking-1% text-foreground-secondary">
                Payment Methods
              </h5>
              <div className="flex items-center gap-5">
                <div className="flex h-[2.220625rem] w-[3.28125rem] items-center justify-center rounded-lg border border-border-payment-card bg-background text-[hsla(229,_71%,_31%,_1)] grayscale transition-all hover:grayscale-0">
                  <PaymentIcons.visa />
                </div>

                <div className="flex h-[2.220625rem] w-[3.28125rem] items-center justify-center rounded-lg border border-border-payment-card bg-background grayscale transition-all hover:grayscale-0">
                  <PaymentIcons.mastercard />
                </div>

                <div className="flex h-[2.220625rem] w-[3.28125rem] items-center justify-center rounded-lg border border-border-payment-card bg-background grayscale transition-all hover:grayscale-0">
                  <PaymentIcons.americanExpress />
                </div>

                <div className="flex h-[2.220625rem] w-[3.28125rem] items-center justify-center rounded-lg border border-border-payment-card bg-background grayscale transition-all hover:grayscale-0">
                  <PaymentIcons.applePay />
                </div>

                <div className="flex h-[2.220625rem] w-[3.28125rem] items-center justify-center rounded-lg border border-border-payment-card bg-background grayscale transition-all hover:grayscale-0">
                  <PaymentIcons.paypal />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[3.75rem] w-full items-center justify-between border-t">
          <p className="font-dm-sans text-sm leading-100% tracking-1% text-foreground-secondary">
            © 2025, All Rights Reserved - MyJewel
          </p>
          <div className="flex items-center gap-[1.875rem] font-dm-sans text-xs font-normal leading-100% tracking-1% text-foreground-secondary">
            <a href="#" className="transition-colors hover:text-foreground-primary-emphasis">
              Terms & Conditions
            </a>
            <a href="#" className="transition-colors hover:text-foreground-primary-emphasis">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground-primary-emphasis">
              Site Map
            </a>
            <div className="flex items-center gap-[1.5625rem]">
              <a href="#" className="text-foreground-muted transition-colors hover:text-foreground-primary-emphasis">
                <LiaFacebook size={25} />
              </a>
              <a href="#" className="text-foreground-muted transition-colors hover:text-foreground-primary-emphasis">
                <LiaInstagram size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Icons                                   */
/* -------------------------------------------------------------------------- */

type IconProps = React.HTMLAttributes<SVGElement>

const PaymentIcons = {
  visa: (props: IconProps) => (
    <svg width={41} height={13} viewBox="0 0 41 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8128 12.8359H7.32935L4.71726 3.03472C4.59326 2.58382 4.33002 2.18524 3.94278 1.99741C2.97643 1.52532 1.91154 1.14961 0.749817 0.960099V0.582762H6.3613C7.13573 0.582762 7.7166 1.14961 7.81338 1.8079L9.16873 8.87783L12.6504 0.582762H16.037L10.8128 12.8359ZM17.9731 12.8359H14.6833L17.3923 0.582762H20.6821L17.9731 12.8359ZM24.9382 3.97739C25.035 3.31747 25.6159 2.94014 26.2935 2.94014C27.3584 2.84538 28.5184 3.03484 29.4865 3.5053L30.0674 0.867142C29.0993 0.489805 28.0344 0.300293 27.068 0.300293C23.875 0.300293 21.5517 1.99758 21.5517 4.3531C21.5517 6.14508 23.1974 7.08601 24.3591 7.65286C25.6159 8.21808 26.0999 8.59542 26.0031 9.16058C26.0031 10.0084 25.035 10.3858 24.0686 10.3858C22.907 10.3858 21.7452 10.1031 20.6821 9.63104L20.1012 12.2708C21.2629 12.7413 22.5197 12.9308 23.6814 12.9308C27.2616 13.0239 29.4865 11.3283 29.4865 8.78324C29.4865 5.57829 24.9382 5.39041 24.9382 3.97739ZM40.9998 12.8359L38.3877 0.582762H35.582C35.0011 0.582762 34.4203 0.960099 34.2267 1.52532L29.3897 12.8359H32.7762L33.4522 11.0455H37.6132L38.0005 12.8359H40.9998ZM36.066 3.88275L37.0324 8.50077H34.3234L36.066 3.88275Z"
        fill="currentColor"
      />
    </svg>
  ),
  mastercard: (props: IconProps) => (
    <svg width={38} height={24} viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9819 20.8114C17.0243 22.5252 14.485 23.5598 11.7102 23.5598C5.51882 23.5598 0.499756 18.4088 0.499756 12.0548C0.499756 5.70076 5.51882 0.549805 11.7102 0.549805C14.485 0.549805 17.0243 1.58441 18.9819 3.29821C20.9395 1.58441 23.4788 0.549863 26.2535 0.549863C32.4449 0.549863 37.464 5.70082 37.464 12.0548C37.464 18.4089 32.4449 23.5598 26.2535 23.5598C23.4788 23.5598 20.9394 22.5252 18.9819 20.8114Z"
        fill="#ED0006"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.981 20.8114C21.3913 18.7012 22.9198 15.5612 22.9198 12.0548C22.9198 8.54841 21.3913 5.40841 18.981 3.29815C20.9385 1.58436 23.4778 0.549805 26.2526 0.549805C32.444 0.549805 37.463 5.70076 37.463 12.0548C37.463 18.4088 32.444 23.5598 26.2526 23.5598C23.4778 23.5598 20.9385 22.5252 18.981 20.8114Z"
        fill="#F9A000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9795 20.8112C21.3899 18.701 22.9183 15.561 22.9183 12.0546C22.9183 8.5483 21.3899 5.4083 18.9795 3.2981C16.5691 5.4083 15.0407 8.5483 15.0407 12.0546C15.0407 15.561 16.5691 18.701 18.9795 20.8112Z"
        fill="#FF5E00"
      />
    </svg>
  ),
  americanExpress: (props: IconProps) => (
    <svg width={42} height={12} viewBox="0 0 42 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.40407 0.799805L0.748657 11.0991H6.32182L7.01271 9.45696H8.59199L9.28292 11.0991H15.4174V9.84576L15.964 11.0991H19.1372L19.6839 9.81926V11.0991H32.442L33.9933 9.49957L35.4459 11.0991L41.9987 11.1123L37.3286 5.9782L41.9987 0.799805H35.5475L34.0374 2.36977L32.6305 0.799805H18.7514L17.5596 3.45816L16.3398 0.799805H10.7783V2.01049L10.1596 0.799805H5.40407ZM24.4556 2.26235H31.7819L34.0227 4.68209L36.3356 2.26235H38.5764L35.1718 5.97677L38.5764 9.64837H36.234L33.9933 7.2005L31.6684 9.64837H24.4556V2.26235ZM26.2648 5.14163V3.79253V3.79125H30.8362L32.8308 5.94884L30.7478 8.11819H26.2648V6.64536H30.2616V5.14163H26.2648ZM6.48238 2.26235H9.19903L12.2869 9.24632V2.26235H15.2629L17.648 7.26981L19.8461 2.26235H22.8072V9.65272H21.0054L20.9907 3.86164L18.3639 9.65272H16.7521L14.1107 3.86164V9.65272H10.4041L9.70138 7.99589H5.9049L5.20366 9.65129H3.2177L6.48238 2.26235ZM6.55322 6.46428L7.804 3.51279L9.0533 6.46428H6.55322Z"
        fill="#434343"
      />
    </svg>
  ),
  applePay: (props: IconProps) => (
    <svg width={42} height={18} viewBox="0 0 42 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.74836 3.27161C6.52057 3.3377 7.29277 2.87509 7.77538 2.2886C8.25001 1.68558 8.5637 0.876078 8.48325 0.0500488C7.79951 0.0830923 6.95495 0.5126 6.47229 1.11561C6.02988 1.63602 5.6518 2.47863 5.74836 3.27161ZM14.9344 13.9111V1.03301H19.64C22.0693 1.03301 23.7665 2.75121 23.7665 5.2624C23.7665 7.77359 22.0371 9.50825 19.5757 9.50825H16.881V13.9111H14.9344ZM8.47511 3.42866C7.79485 3.38843 7.17407 3.63874 6.67269 3.84095C6.35 3.97103 6.07679 4.08124 5.86894 4.08124C5.63564 4.08124 5.35115 3.96512 5.03166 3.8348C4.6131 3.66408 4.13454 3.46883 3.6327 3.47822C2.48247 3.49475 1.41263 4.16385 0.825391 5.22941C-0.381142 7.36066 0.511702 10.5161 1.67804 12.2509C2.24917 13.1099 2.93291 14.0516 3.83384 14.0186C4.23019 14.0033 4.5153 13.879 4.81031 13.7504C5.15002 13.6024 5.50293 13.4486 6.05391 13.4486C6.58581 13.4486 6.92329 13.5984 7.24723 13.7422C7.55522 13.8789 7.85104 14.0101 8.29009 14.002C9.22318 13.9855 9.81042 13.143 10.3815 12.2839C10.9978 11.3619 11.2687 10.462 11.3098 10.3254L11.3146 10.3096C11.3136 10.3086 11.306 10.3051 11.2926 10.2987C11.0865 10.2019 9.51182 9.46153 9.49668 7.47631C9.48153 5.80993 10.7457 4.9657 10.9448 4.83277C10.9568 4.82472 10.965 4.81927 10.9687 4.81643C10.1644 3.59387 8.90949 3.4617 8.47511 3.42866ZM27.3221 14.0104C28.5447 14.0104 29.6789 13.3743 30.1937 12.3666H30.234V13.9113H32.0358V7.50112C32.0358 5.64251 30.5878 4.44477 28.3597 4.44477C26.2924 4.44477 24.7641 5.65903 24.7078 7.32767H26.4614C26.6062 6.53469 27.3221 6.01428 28.3034 6.01428C29.4939 6.01428 30.1616 6.58425 30.1616 7.63329V8.34373L27.7323 8.49243C25.472 8.63283 24.2493 9.5828 24.2493 11.2349C24.2493 12.9035 25.5122 14.0104 27.3221 14.0104ZM27.8448 12.482C26.8071 12.482 26.1475 11.9698 26.1475 11.1851C26.1475 10.3756 26.783 9.90472 27.9976 9.83034L30.1614 9.68993V10.4168C30.1614 11.6229 29.164 12.482 27.8448 12.482ZM38.0122 14.4149C37.232 16.67 36.3392 17.4134 34.4408 17.4134C34.296 17.4134 33.8134 17.3969 33.7008 17.3638V15.8191C33.8214 15.8357 34.119 15.8522 34.2719 15.8522C35.1326 15.8522 35.6152 15.4804 35.9128 14.514L36.0898 13.944L32.7918 4.56837H34.8269L37.1194 12.1763H37.1596L39.4521 4.56837H41.4309L38.0122 14.4149ZM16.8809 2.71811H19.1251C20.8143 2.71811 21.7796 3.64327 21.7796 5.27057C21.7796 6.89793 20.8143 7.83132 19.1171 7.83132H16.8809V2.71811Z"
        fill="#434343"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg width={12} height={21} viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2.64648 5.52825V0H7.03741V1.05709C7.03741 3.5263 5.07138 5.52825 2.64648 5.52825Z" fill="#292929" />
      <path d="M11.4045 7.20304L0.0179798 8.81813L0 5.94615L11.3865 4.33105L11.4045 7.20304Z" fill="#292929" />
      <path d="M11.4306 11.3515L0.0441023 12.9666L0.026123 10.0946L11.4127 8.47949L11.4306 11.3515Z" fill="#292929" />
      <path
        d="M10.7937 19.985C10.7937 19.985 8.75806 20.7436 6.88194 20.5239C4.47502 20.2413 2.49414 18.5235 2.49414 16.0559V6.57471H6.55909V15.3379C6.55909 16.5861 7.85674 17.0772 9.13876 16.84C9.58356 16.758 10.8687 16.3011 10.8687 16.3011L10.7937 19.985Z"
        fill="#292929"
      />
    </svg>
  ),
}
