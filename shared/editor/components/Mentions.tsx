import { DocumentIcon } from "outline-icons";
import * as React from "react";
import { cn } from "../styles/utils";
import { ComponentProps } from "../types";
import useStores from "./hooks/useStores";

export function MentionUser(props: ComponentProps) {
  const { isSelected, node } = props;
  const { users } = useStores();
  const user = users.get(node.attrs.modelId);

  return (
    <span
      className={cn({
        "ProseMirror-selectednode": isSelected,
        "use-hover-preview": true,
        mention: true,
      })}
    >
      @{user?.name || node.attrs.label}
    </span>
  );
}

export function MentionDocument(props: ComponentProps) {
  const { isSelected, node } = props;
  const { documents } = useStores();
  const doc = documents.get(node.attrs.modelId);

  return (
    <a
      className={cn({
        "ProseMirror-selectednode": isSelected,
        "use-hover-preview": true,
        mention: true,
      })}
      href={`/doc/${node.attrs.modelId}`}
    >
      {doc?.icon ? (
        // <Icon value={doc.icon} color={doc.color} size={18} />
        doc.icon
      ) : (
        <DocumentIcon size={18} />
      )}{" "}
      {doc?.title || node.attrs.label}
    </a>
  );
}
