import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { formatDate } from "date-fns";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  className,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);

  return (
    <div
      className={cn(
        "bg-white text-black h-fit w-full aspect-[210/297]",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
      >
        <PersonalInfoHeader resumeData={resumeData} />
        <SummarySection resumeData={resumeData} />
        <WorkExperienceSection resumeData={resumeData} />
        <EducationSection resumeData={resumeData} />
        <AwardSection resumeData={resumeData} />
        <CertificateSection resumeData={resumeData} />
        <ProjectSection resumeData={resumeData} />
      </div>
    </div>
  );
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
}

function PersonalInfoHeader({ resumeData }: ResumeSectionProps) {
  const { photo, firstName, lastName, jobTitle, city, country, phone, email } =
    resumeData;

  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
    if (objectUrl) setPhotoSrc(objectUrl);
    if (photo === null) setPhotoSrc("");
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  return (
    <div className="flex justify-center gap-6">
      {photoSrc && (
        <Image
          src={photoSrc}
          width={78}
          height={100}
          alt="Author Photo"
          className="aspect-square object-contai"
        />
      )}
      <div className="space-y-2.5">
        <div className="space-y-1 text-center">
          <p className="text-3xl text-sky-900">
            {firstName} {lastName}
          </p>
          <p className="text-s">{jobTitle}</p>
        </div>
        <p className="text-xs text-center">
          {[city, country].filter(Boolean).join(", ")}
          {(city || country) && (phone || email) ? " | " : ""}
          {[phone, email].filter(Boolean).join(" | ")}
        </p>
      </div>
    </div>
  );
}

function SummarySection({ resumeData }: ResumeSectionProps) {
  const { summary } = resumeData;

  if (!summary) return null;

  return (
    <>
      <hr className="border-2" />
      <div className="spacce-y-3 break-inside-avoid">
        <p className="text-2xl text-sky-900">About Me</p>
        <div className="whitespace-pre-line text-xs">{summary}</div>
      </div>
    </>
  );
}

function WorkExperienceSection({ resumeData }: ResumeSectionProps) {
  const { workExperiences } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;

  return (
    <>
      <hr className="border-2" />
      <div className="space-y-3">
        <p className="text-2xl text-sky-900">Experience</p>
        {workExperiencesNotEmpty.map((exp, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-base font-semibold">{exp.position}</span>
              {exp.startDate && (
                <span>
                  {formatDate(exp.startDate, "MMM yyyy")} -{" "}
                  {exp.endDate
                    ? formatDate(exp.endDate, "MMM yyyy")
                    : "Present"}
                </span>
              )}
            </div>
            <p className="text-xs">{exp.company}</p>
            <div className="whitespace-pre-line text-xs px-6">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function EducationSection({ resumeData }: ResumeSectionProps) {
  const { educations } = resumeData;

  const educationsNotEmpty = educations?.filter(
    (edu) => Object.values(edu).filter(Boolean).length > 0,
  );

  if (!educationsNotEmpty?.length) return null;

  return (
    <>
      <hr className="border-2" />
      <div className="space-y-3">
        <p className="text-2xl text-sky-900">Education</p>
        {educationsNotEmpty.map((edu, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-base font-semibold">
                {edu.fieldOfStudy}
              </span>
              {edu.startDate && (
                <span>
                  {formatDate(edu.startDate, "MMM yyyy")} -{" "}
                  {edu.endDate
                    ? formatDate(edu.endDate, "MMM yyyy")
                    : "Present"}
                </span>
              )}
            </div>
            <p className="text-xs">{edu.institution}</p>
            <div className="whitespace-pre-line text-xs px-6">
              {edu.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AwardSection({ resumeData }: ResumeSectionProps) {
  const { awards } = resumeData;

  const awardsNotEmpty = awards?.filter(
    (award) => Object.values(award).filter(Boolean).length > 0,
  );

  if (!awardsNotEmpty?.length) return null;

  return (
    <>
      <hr className="border-2" />
      <div className="space-y-3">
        <p className="text-2xl text-sky-900">Award</p>
        {awardsNotEmpty.map((award, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-base font-semibold">{award.title}</span>
              <span>
                {award.dateReceived && (
                  <span>{formatDate(award.dateReceived, "MMM yyyy")}</span>
                )}
              </span>
            </div>
            {award.issuer && (
              <p className="text-xs">Issued by {award.issuer}</p>
            )}
            <div className="whitespace-pre-line text-xs px-6">
              {award.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CertificateSection({ resumeData }: ResumeSectionProps) {
  const { certificates } = resumeData;

  const certificatesNotEmpty = certificates?.filter(
    (cert) => Object.values(cert).filter(Boolean).length > 0,
  );

  if (!certificatesNotEmpty?.length) return null;

  return (
    <>
      <hr className="border-2" />
      <div className="space-y-3">
        <p className="text-2xl text-sky-900">Certicate</p>
        {certificatesNotEmpty.map((cert, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-base font-semibold">{cert.title}</span>
              <span>
                {cert.issueDate && (
                  <span>{formatDate(cert.issueDate, "MMM yyyy")}</span>
                )}
              </span>
            </div>
            {cert.issuer && (
              <p className="text-xs">Issued by {cert.issuer}</p>
            )}
            {cert.credentialId && (
              <p className="text-xs">Credential ID {cert.credentialId}</p>
            )}
            {cert.credentialUrl && (
              <p className="text-xs">Credential URL {cert.credentialUrl}</p>
            )}
            <div className="whitespace-pre-line text-xs px-6">
              {cert.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ProjectSection({ resumeData }: ResumeSectionProps) {
  const { projects } = resumeData;

  const projectsNotEmpty = projects?.filter(
    (project) => Object.values(project).filter(Boolean).length > 0,
  );

  if (!projectsNotEmpty?.length) return null;

  return (
    <>
      <hr className="border-2" />
      <div className="space-y-3">
        <p className="text-2xl text-sky-900">Project</p>
        {projectsNotEmpty.map((project, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-base font-semibold">{project.title}</span>
              <span>
                {project.publicationDate && (
                  <span>{formatDate(project.publicationDate, "MMM yyyy")}</span>
                )}
              </span>
            </div>
            {project.publicationUrl && (
              <p className="text-xs">Publication URL {project.publicationUrl}</p>
            )}
            <div className="whitespace-pre-line text-xs px-6">
              {project.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


