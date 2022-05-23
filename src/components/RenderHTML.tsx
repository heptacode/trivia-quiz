interface Props {
  html: any;
}

export function RenderHTML({ html }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
