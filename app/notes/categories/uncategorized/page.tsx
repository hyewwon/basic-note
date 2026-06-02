"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { NoteList } from "@/components/notes/note-list";

export default function UncategorizedNotesPage() {
  const { t } = useLanguage();

  return <NoteList uncategorized title={t("categories.uncategorized")} />;
}
