export default function ConvitePage(props: any) {
  console.log(props);
  return (
    <div>
      <span>{props.params.alias}</span>
    </div>
  );
}
