import React from "react";
import { ShieldCheck, FileCheck2, Lock } from "lucide-react";

const TCHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3B2565] via-[#4D2E85] to-[#2D1B50] pb-16 md:pb-20">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E74040]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwSDMwdi02aDZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl pt-10 pb-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
          <Lock size={12} />
          Official Verification Portal
        </div>

        <h1 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tight">
          <span className="text-white">Transfer Certificate</span>
          <br />
          <span className="text-[#FFD63F]">Verification</span>
        </h1>
        <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed mb-6">
          Instantly verify the authenticity of Transfer Certificates issued by Beersheba Senior Secondary School, Haldwani.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: ShieldCheck, label: "Secure & Authenticated" },
            { icon: FileCheck2, label: "Officially Issued Records" },
            { icon: Lock, label: "Privacy Protected" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
              <Icon size={14} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TCHero;
