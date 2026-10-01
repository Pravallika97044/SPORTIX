import React, { useState } from 'react';
import { Server, Cpu, HardDrive, ShieldCheck, Activity, Terminal, Layers, RefreshCw, CheckCircle, Database } from 'lucide-react';

export default function DevOpsSystemMonitor() {
  const [activeLogTab, setActiveLogTab] = useState('k8s');

  const pipelineSteps = [
    { name: 'GitHub', desc: 'Code Repository', status: 'Passing', icon: Layers },
    { name: 'GitHub Actions', desc: 'Automated CI Test Build', status: 'Success', icon: CheckCircle },
    { name: 'Jenkins', desc: 'Deployment Orchestration', status: 'Completed', icon: RefreshCw },
    { name: 'Docker Hub', desc: 'Container Registry', status: 'Image Built v2.4', icon: Server },
    { name: 'Kubernetes', desc: 'Cluster Scaling & Load Balancer', status: '8 Pods Running', icon: Cpu },
    { name: 'Prometheus & Grafana', desc: 'Real-time Metrics Telemetry', status: 'Active (12ms)', icon: Activity },
    { name: 'ELK Stack', desc: 'Centralized Log Aggregation', status: 'Connected', icon: Terminal },
  ];

  const logs = [
    '[STAMS-Gateway] INFO 2026-08-23 14:52:10 - Request GET /api/v1/tournaments/104 200 OK (8ms)',
    '[Arena-Service] INFO 2026-08-23 14:52:12 - Reserved Slot Gachibowli Court #1 for Match SFC vs TBC',
    '[Ticket-Service] INFO 2026-08-23 14:52:15 - Generated Signed QR Code JWT token for User John Doe',
    '[K8s-Autoscaler] INFO 2026-08-23 14:52:18 - HPA checked cluster CPU 14% - Desired Replicas: 8',
    '[Prometheus] METRIC 2026-08-23 14:52:20 - http_requests_total{status="200"} rate=420 req/sec',
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-darkBorder">
      <div className="mb-8">
        <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-500">
          Enterprise Technical Architecture & Infrastructure
        </span>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mt-1">
          DevOps, Kubernetes & System Telemetry
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Containerized Microservices architecture with automated CI/CD, K8s orchestration, Prometheus monitoring & ELK logs.
        </p>
      </div>

      {/* Live System Telemetry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-xs">
        <div className="p-4 rounded-2xl bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder shadow-lg">
          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase font-bold text-[10px]">Kubernetes Pods</span>
            <Cpu className="h-4 w-4 text-emerald-500" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">8 / 8</span>
          <span className="text-emerald-500 text-[10px] font-semibold">100% Healthy Replicas</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder shadow-lg">
          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase font-bold text-[10px]">Prometheus Latency</span>
            <Activity className="h-4 w-4 text-blue-500" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block font-mono">12 ms</span>
          <span className="text-blue-500 text-[10px] font-semibold">Avg API Response Time</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder shadow-lg">
          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase font-bold text-[10px]">Spring Boot Gateway</span>
            <Server className="h-4 w-4 text-indigo-500" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block font-mono">420/s</span>
          <span className="text-indigo-500 text-[10px] font-semibold">Requests per Second</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder shadow-lg">
          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase font-bold text-[10px]">PostgreSQL DB</span>
            <Database className="h-4 w-4 text-amber-500" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">Active</span>
          <span className="text-amber-500 text-[10px] font-semibold">Replicated Read Slaves</span>
        </div>
      </div>

      {/* DevOps CI/CD Pipeline Steps Visualizer */}
      <div className="rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 sm:p-8 shadow-2xl mb-8">
        <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-6 pb-4 border-b border-slate-100 dark:border-darkBorder flex items-center justify-between">
          <span>Continuous Integration & Deployment Pipeline</span>
          <span className="text-xs text-emerald-500 font-extrabold flex items-center gap-1">
            <CheckCircle className="h-4 w-4" /> Pipeline Passing
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.name}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-darkBorder flex flex-col justify-between text-left text-xs"
              >
                <div>
                  <div className="h-8 w-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-xs block">{step.name}</span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-darkBorder">
                  <span className="text-[9px] font-extrabold text-emerald-500 uppercase">{step.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ELK Stack Centralized Logging Terminal Console */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 text-slate-200 p-6 shadow-2xl font-mono text-xs text-left">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span className="font-bold text-white text-xs">ELK Stack Live Console Log Stream</span>
          </div>
          <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
            Logstash Connected
          </span>
        </div>

        <div className="space-y-2 max-h-48 overflow-y-auto pr-2 text-[11px] leading-relaxed">
          {logs.map((log, index) => (
            <div key={index} className="flex gap-2 text-slate-300">
              <span className="text-slate-600 select-none">&gt;</span>
              <span className={log.includes('ERROR') ? 'text-rose-400' : log.includes('METRIC') ? 'text-amber-300' : 'text-emerald-300'}>
                {log}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
