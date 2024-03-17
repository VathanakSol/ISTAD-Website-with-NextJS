import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from 'flowbite-react';
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

export default function FooterComponent() {
    return (
        <div className="bg-primary p-4 mt-4">
            <Footer className="container mx-auto bg-primary border-0">
                <div className="w-full">
                    <div className="grid w-full p-10 justify-around sm:flex sm:justify-around md:flex md:grid-cols-1">
                        <div>
                            <FooterBrand
                                href="https://flowbite.com"
                                src="https://istad.co/resources/img/logo_md.png"
                                alt="Flowbite Logo"
                                name="ISTAD"
                            />
                        </div>

                        <div>
                            <FooterTitle className="text-white" title="about"/>
                            <FooterLinkGroup col>
                                <FooterLink href="#">Founder</FooterLink>
                                <FooterLink href="#">History</FooterLink>
                                <FooterLink href="#">Mentor</FooterLink>
                            </FooterLinkGroup>
                        </div>
                       
                        <div>
                            <FooterTitle className="text-white" title="Follow us"/>
                            <FooterLinkGroup col>
                                <FooterLink href="#">Facebook</FooterLink>
                                <FooterLink href="#">Instagram</FooterLink>
                                <FooterLink href="#">TikTok</FooterLink>
                                <FooterLink href="#">YouTube</FooterLink>
                                <FooterLink href="#">Twitter(X)</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-white" title="Legal"/>
                            <FooterLinkGroup col>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>

                    </div>
                    <FooterDivider/>
                    <div className="w-full grid place-content-center sm:items-center">
                        <FooterCopyright 
                            className="text-white"
                            by="Center of Science and Technology Advanced Development | All Rights Reserved™"
                            year={2024}
                        />
                    </div>
                </div>
            </Footer>
        </div>
    );
}
