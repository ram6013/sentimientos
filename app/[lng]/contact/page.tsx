import { ISession } from "@/@types/types";
import ContactPage from "@/app/components/contact-page";
import { auth } from "@/auth";

export default async function Contact({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    const session = (await auth()) as ISession;
    console.log(session);
    if (!session.user) {
        return <div>Not authorized</div>;
    }
    return <ContactPage lng={lng} user={session.user}></ContactPage>;
}