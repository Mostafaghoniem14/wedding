export default function SectionSeparator() {
  return (
    <div
      className="flex items-center justify-center gap-3 px-6 py-2 text-[#b8944e]"
      aria-hidden="true"
    >
      <span className="h-px w-[40%] bg-[#b8944e]/45" />
      <span className="text-xs">◇</span>
      <span className="h-px w-[40%] bg-[#b8944e]/45" />
    </div>
  );
}
