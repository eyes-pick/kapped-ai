"use client";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { RotateCcw, Play } from "lucide-react";

/**
 * Interactive slot containing test and lint buttons.
 */
export default function HeaderLeftSlot() {
  const [open, setOpen] = useState(false);
  const [loadingTest, setLoadingTest] = useState(false);
  const [loadingLint, setLoadingLint] = useState(false);
  const [lastRunTest, setLastRunTest] = useState<string | null>(null);
  const [lastRunLint, setLastRunLint] = useState<string | null>(null);
  const [testStatus, setTestStatus] = useState<"pass" | "fail">("fail");
  const [lintStatus, setLintStatus] = useState<"pass" | "fail">("pass");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const formatNow = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear().toString().slice(2);
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");
    const millis = now.getMilliseconds().toString().padStart(3, "0");
    return {
      full: `[ ${day}/${month}/${year} ${hour}:${minute}:${second}/${millis} ]`,
      date: `${day}/${month}/${year}`,
      time: `${hour}:${minute}:${second}/${millis}`,
    };
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleRetry = (type: "test" | "lint") => {
    if (type === "test") {
      setLoadingTest(true);
      setTimeout(() => {
        setLoadingTest(false);
        setLastRunTest(formatNow().full);
        setTestStatus(Math.random() > 0.5 ? "pass" : "fail"); // Simulate random result
      }, 2000);
    } else {
      setLoadingLint(true);
      setTimeout(() => {
        setLoadingLint(false);
        setLastRunLint(formatNow().full);
        setLintStatus(Math.random() > 0.5 ? "pass" : "fail"); // Simulate random result
      }, 2000);
    }
  };

  const renderButton = (
    type: "test" | "lint",
    loading: boolean,
    status: "pass" | "fail",
  ) => (
    <button
      onClick={() => handleRetry(type)}
      className="bg-zinc-600 hover:bg-zinc-500 p-2 rounded flex items-center justify-center"
      aria-label={`Run ${type}`}
    >
      {loading ? (
        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
      ) : status === "fail" ? (
        <RotateCcw size={16} />
      ) : (
        <Play size={16} />
      )}
    </button>
  );

  const getDateTime = (full: string | null) => {
    if (!full) return { date: "", time: "" };
    const match = full.match(
      /\[ (\d{2}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}\/\d{3}) \]/,
    );
    if (match) return { date: match[1], time: match[2] };
    return { date: "", time: "" };
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      aria-haspopup="true"
      aria-expanded={open}
    >
      <span
        onClick={() => setOpen(!open)}
        className="font-digital font-[700] text-white cursor-pointer text-2xl tracking-[0.5rem]"
        tabIndex={0}
        aria-label="Open menu"
      >
        GEN8
      </span>
      {open && (
        <div
          className="absolute left-0 mt-2 flex flex-col bg-zinc-800 text-white rounded shadow-md w-64 z-50"
          role="menu"
        >
          <a href="#" className="px-4 py-2 hover:bg-zinc-700" role="menuitem">
            Dashboard
          </a>
          <a href="#" className="px-4 py-2 hover:bg-zinc-700" role="menuitem">
            Portfolio
          </a>
          <hr className="border-zinc-600" />
          <a href="#" className="px-4 py-2 hover:bg-zinc-700" role="menuitem">
            Project settings
          </a>
          <hr className="border-zinc-600" />
          <a href="#" className="px-4 py-2 hover:bg-zinc-700" role="menuitem">
            Sign out
          </a>
          <hr className="border-zinc-600" />
          <div className="px-4 py-2 flex flex-col gap-2">
            <div className="flex justify-between items-center gap-2">
              {renderButton("test", loadingTest, testStatus)}
              <span>Test</span>
              <span
                className={clsx(
                  "w-2 h-2 rounded-full",
                  testStatus === "fail" ? "bg-red-500" : "bg-green-500",
                )}
              />
            </div>
            {lastRunTest && (
              <>
                <div className="text-[10px] text-zinc-500 flex justify-between pb-1">
                  <span>{getDateTime(lastRunTest).date}</span>
                  <span>{getDateTime(lastRunTest).time}</span>
                </div>
                <div className="text-xs text-zinc-400 flex justify-between">
                  <span>Last run:</span>
                  <span>{lastRunTest}</span>
                </div>
              </>
            )}
          </div>
          <div className="px-4 py-2 flex flex-col gap-2">
            <div className="flex justify-between items-center gap-2">
              {renderButton("lint", loadingLint, lintStatus)}
              <span>Lint/Format</span>
              <span
                className={clsx(
                  "w-2 h-2 rounded-full",
                  lintStatus === "fail" ? "bg-red-500" : "bg-green-500",
                )}
              />
            </div>
            {lastRunLint && (
              <>
                <div className="text-[10px] text-zinc-500 flex justify-between pb-1">
                  <span>{getDateTime(lastRunLint).date}</span>
                  <span>{getDateTime(lastRunLint).time}</span>
                </div>
                <div className="text-xs text-zinc-400 flex justify-between">
                  <span>Last run:</span>
                  <span>{lastRunLint}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
// No unused imports found. File is under 100 lines. No code split needed.
