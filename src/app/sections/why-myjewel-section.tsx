import React from "react"
import { IoRibbonOutline } from "react-icons/io5"
import { PiUserCircleCheckLight } from "react-icons/pi"

const WhyMyJewelSection = () => {
  return (
    <div className="relative flex w-full justify-center bg-background-accent pb-[7.3125rem] pt-[4.8125rem]">
      <section className="flex w-full max-w-screen-xl flex-col gap-10">
        <h3 className="leading-50px text-center font-playfair text-4xl font-normal tracking-1% text-foreground">
          Why Choose MyJewel?
        </h3>

        <div className="z-10 flex items-center gap-[2.0625rem]">
          <div className="flex min-h-[12.125rem] w-[25rem] flex-col items-center justify-center gap-5 bg-background p-5 text-center shadow-[0px_2px_15px_0px_hsla(0,_0%,_48%,_0.1)]">
            <PiUserCircleCheckLight className="text-foreground-primary" size={45} />

            <h4 className="font-playfair text-xl font-semibold leading-100% tracking-3% text-foreground-primary">
              Personal Design Consultation
            </h4>

            <p className="font-dm-sans text-base font-normal text-foreground-muted">
              Work with our designers to create <br /> your perfect piece.
            </p>
          </div>

          <div className="flex min-h-[12.125rem] w-[25rem] flex-col items-center justify-center gap-5 bg-background p-5 text-center shadow-[0px_2px_15px_0px_hsla(0,_0%,_48%,_0.1)]">
            <svg width="45" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.40767 1.78527C5.61505 1.77797 3.88879 2.12189 2.32935 2.88109C11.5756 5.54084 19.2392 10.3535 25.9166 16.507C25.0397 12.487 22.3646 8.82267 18.9403 6.15519C17.961 6.88908 16.5036 6.9027 15.3231 6.22111C14.1452 5.54084 13.4308 4.27495 13.5735 3.0625C11.5354 2.25065 9.42994 1.79353 7.40749 1.78527H7.40767ZM16.3396 2.36755C15.8812 2.38214 15.5032 2.58507 15.326 2.89208C15.0235 3.41608 15.2777 4.29613 16.1472 4.79825C17.0167 5.30037 17.9047 5.08055 18.2073 4.55655C18.5097 4.03255 18.2583 3.14977 17.3887 2.64756C17.0626 2.45948 16.7326 2.3744 16.4329 2.36755C16.4018 2.36667 16.3701 2.36649 16.3397 2.36755H16.3396ZM12.5383 8.86319L3.29052 24.8895C3.8154 25.6325 4.44127 26.1455 5.49877 26.2133L14.7686 10.1487C14.0628 9.68198 13.3184 9.25413 12.5383 8.86319ZM29.6576 9.41251L28.1278 10.36L27.2296 16.2185L30.5969 11.022L29.6576 9.41251ZM17.3227 14.8371L15.4028 16.0207L16.6662 17.5425L24.2386 17.125L17.3227 14.8372V14.8371ZM35.7578 14.8974L35.4255 14.999L19.509 19.9126L19.1794 20.017L19.0203 20.3247L15.3013 27.6086L14.9827 28.2348L15.5513 28.6468L34.5823 42.4676L35.4723 43.113L35.8376 42.075L43.6214 19.9758L43.8549 19.3166L43.2396 18.9818L36.0629 15.065L35.7579 14.8975L35.7578 14.8974ZM35.5793 16.6717L41.1411 19.7094L35.3429 21.4975L32.4207 17.6467L35.5793 16.6717ZM30.748 18.1631L33.673 22.0138L25.0215 24.6834L25.2658 19.8549L30.748 18.1631ZM23.5959 20.3712L23.3516 25.1999L17.4435 27.0237L20.3248 21.382L23.5961 20.3712H23.5959ZM41.3937 21.3491L35.6562 37.6446L36.0133 23.0108L41.3938 21.3491H41.3937ZM34.3572 23.5218L34 38.1556L25.3154 26.3149L34.3571 23.5218H34.3572ZM23.6536 26.8258L32.5581 38.9684L18.1715 28.5205L23.6536 26.8259V26.8258Z"
                fill="currentColor"
              />
            </svg>

            <h4 className="font-playfair text-xl font-semibold leading-100% tracking-3% text-foreground-primary">
              Crafted with Luxury Materials
            </h4>

            <p className="font-dm-sans text-base font-normal text-foreground-muted">
              Only the finest diamonds, gemstones, and precious metals used.{" "}
            </p>
          </div>

          <div className="flex min-h-[12.125rem] w-[25rem] flex-col items-center justify-center gap-5 bg-background p-5 text-center shadow-[0px_2px_15px_0px_hsla(0,_0%,_48%,_0.1)]">
            <IoRibbonOutline size={45} />

            <h4 className="font-playfair text-xl font-semibold leading-100% tracking-3% text-foreground-primary">
              Lifetime Warranty{" "}
            </h4>

            <p className="font-dm-sans text-base font-normal text-foreground-muted">
              Lifetime warranty on every piece, ensuring quality and lasting beauty.{" "}
            </p>
          </div>
        </div>

        <div className="-z-1 absolute bottom-0 right-0">
          <svg width="629" height="254" viewBox="0 0 629 254" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="470" cy="272" r="272" fill="#15274B" fillOpacity="0.1" />
            <circle cx="199.5" cy="385.5" r="199.5" fill="#15274B" fillOpacity="0.1" />
          </svg>
        </div>
      </section>
    </div>
  )
}

export default WhyMyJewelSection
