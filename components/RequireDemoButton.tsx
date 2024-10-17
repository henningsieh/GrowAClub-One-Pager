import { Button } from "./ui/button";

import {
  inquiryEmailBody,
  inquiryEmailSubject,
  recipientAddress,
} from "@/assets/InquiryEmailBody";

const handleDemoRequest = () => {
  const recipient = encodeURIComponent(recipientAddress);
  const subject = encodeURIComponent(inquiryEmailSubject);
  const body = encodeURIComponent(inquiryEmailBody);

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
};

function RequireDemoButton() {
  return (
    <div>
      <div className="space-x-4">
        <Button
          variant={"default"}
          className="font-text-2xl px-8 py-4 text-lg text-white dark:bg-primary-foreground hover:dark:bg-primary"
          onClick={handleDemoRequest}
        >
          Demo anfordern
        </Button>
        {/* <Link href="#pricing">
            <Button
                variant="outline"
                className="border-green-700 px-8 py-4 text-lg text-green-700 hover:bg-green-100 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-stone-800" // Increased padding
            >
                Preise
            </Button>
            </Link> */}
      </div>
    </div>
  );
}

export default RequireDemoButton;
