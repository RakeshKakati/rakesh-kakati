import Link from "next/link";

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

function parseMarkdown(source: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i += 1;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim());
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, "").trim());
        i += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }
    const para = [line.trim()];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("- ") &&
      !/^\d+\.\s/.test(lines[i])
    ) {
      para.push(lines[i].trim());
      i += 1;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }

  return blocks;
}

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const label = link[1];
      const href = link[2];
      const className =
        "underline decoration-line underline-offset-4 hover:decoration-accent";
      if (href.startsWith("/")) {
        return (
          <Link key={index} href={href} className={className}>
            {label}
          </Link>
        );
      }
      return (
        <a
          key={index}
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function Markdown({ source }: { source: string }) {
  const blocks = parseMarkdown(source);
  return (
    <div className="space-y-5 text-lg leading-relaxed text-muted">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="pt-4 font-serif text-3xl leading-tight text-foreground"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="pt-2 font-serif text-2xl leading-tight text-foreground"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul" || block.type === "ol") {
          const Tag = block.type === "ul" ? "ul" : "ol";
          return (
            <Tag
              key={index}
              className={
                block.type === "ul"
                  ? "list-disc space-y-2 pl-5"
                  : "list-decimal space-y-2 pl-5"
              }
            >
              {block.items.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </Tag>
          );
        }
        return (
          <p key={index}>
            <Rich text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
