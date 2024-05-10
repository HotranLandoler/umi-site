import { siteAnnouncement } from "@/data/site-data";

export default function Announcement() {
  return (
    <div className="bg-primary py-2 text-center text-primary-foreground">
      {siteAnnouncement}
    </div>
  );
}
